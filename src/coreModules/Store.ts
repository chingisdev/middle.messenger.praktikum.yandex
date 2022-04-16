import EventBus from './eventBus';
import { Indexed } from '../utils/merge';
import { set } from '../utils/set';
import Block from './Block';
import isEqual from '../utils/isEqual';

export enum StoreEvents {
  Updated = 'updated',
}

export interface IUser extends ICommonUser{
  id: number,
  display_name: string;
}

export interface ICommonUser {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface ILastMessage {
  user: ICommonUser;
  time: string;
  content: string;
}

export interface IChat {
  id: number;
  title: string;
  avatar: string;
  created_by: number;
  unread_count: number;
  last_message: ILastMessage | null;
}

interface StoreData {
  currentUser?: IUser;
  currentPassword?: string;
  currentChats?: IChat[];
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
