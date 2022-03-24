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
    this.emit(StoreEvents.Updated);
  };
}

const store = new Store();

export const withStore = (
  mapStateToProps: (state: StoreData) => Record<string, unknown>
) => (Component: typeof Block) => {

  return class extends Component<any> {
    constructor(props) {
      const state = mapStateToProps(store.getState());
      super({ ...props, ...state });
      store.on(StoreEvents.Updated, this.onUpdateStore.bind(this, state));
    }

    private onUpdateStore(state) {
      // debugger;
      // const newState = mapStateToProps(store.getState());
      // if (!isEqual(oldState, newState)) {
      //   this.setProps({
      //     ...newState
      //   });
      // }
      this.setProps(state);
    }
  };
};

export default store;
