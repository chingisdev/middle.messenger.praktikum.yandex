import EventBus from './eventBus';
import { Indexed } from '../utilFunctions/merge';
import { set } from '../utilFunctions/set';

export enum StoreEvents {
  Updated = 'updated',
}

// наследуем Store от EventBus, чтобы его методы были сразу доступны у экземпляра Store
class Store extends EventBus {
  private state: Indexed = {};

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    // метод EventBus
    this.emit(StoreEvents.Updated);
  };
}

export default new Store();
