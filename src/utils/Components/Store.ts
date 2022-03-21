import EventBus from './eventBus';
import { Indexed } from '../utilFunctions/merge';
import { set } from '../utilFunctions/set';
import Block from './Block';
import isEqual from '../utilFunctions/isEqual';

export enum StoreEvents {
  Updated = 'updated',
}

interface User {
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
  currentUser?: User;
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
  let state;

  return class extends Component<any> {
    constructor(props) {
      state = mapStateToProps(store.getState());
      super({ ...props, ...state });
      store.on(StoreEvents.Updated, this.onUpdateStore);
    }

    private onUpdateStore() {
      const newState = mapStateToProps(store.getState());
      if (!isEqual(state, newState)) {
        this.setProps({
          ...newState
        });
      }
    }
  };
};

export default store;
