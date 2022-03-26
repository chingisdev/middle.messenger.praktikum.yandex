import EventBus from './eventBus';
import { Indexed } from '../utilFunctions/merge';
import { set } from '../utilFunctions/set';
import Block from './Block';
import isEqual from '../utilFunctions/isEqual';

export enum StoreEvents {
  Updated = 'updated',
}

export interface IUser {
  id: number,
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

interface StoreData {
  currentUser?: IUser;
}

// наследуем Store от EventBus, чтобы его методы были сразу доступны у экземпляра Store
class Store extends EventBus {
  private state: StoreData = {};

  public getState() {
    return this.state;
  }

  public set(path: keyof StoreData, value: unknown) {
    set(this.state, path, value);

    // метод EventBus
    // debugger;
    this.emit(StoreEvents.Updated);
  };
}

const store = new Store();

export const withStore = (
  mapStateToProps: (state: StoreData) => Record<string, unknown>
) => (Component: typeof Block) => {
  let state;

  return class extends Component<any> {
    constructor(props) {
      // debugger;
      state = mapStateToProps(store.getState());

      super({ ...props, ...state });

      // можно расширить регистер событий
      store.on(StoreEvents.Updated, () => {
        const newState = mapStateToProps(store.getState());

        // if (!isEqual(state, newState)) {
        //   this.setProps({
        //     ...newState
        //   });
        //   this.updateChildren(newState);
        // }
        this.setProps({
          ...newState
        });
        this.updateChildren(newState);
        state = newState;
      });
    }
  }
};

export default store;
