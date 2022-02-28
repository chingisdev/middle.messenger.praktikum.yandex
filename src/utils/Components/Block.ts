import { nanoid } from 'nanoid';
import EventBus from './eventBus';
import { LifecycleEvents } from '../constants/enviroment';

export default class Block {
  private static EVENTS = LifecycleEvents;

  private _element: HTMLElement | null = null;

  private eventBus: () => EventBus = null;

  protected props: ProxyConstructor | any; // по сути всегда делаем прокси

  //  eslint-disable-next-line
  protected children: Record<string, Block>;

  public id = nanoid(6);

  constructor(propsAndChildren: any = {}) {
    const eventBus = new EventBus();
    const { children, props } = this.divideChildrenProps(propsAndChildren);
    this.children = children;
    this.initChildren();
    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    this.eventBus().emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private _createDocumentElement(tagName) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  // Может переопределять пользователь, необязательно трогать
  protected componentDidMount() {
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: any, newProps: any) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  //  TODO: implement deep comparison
  //  eslint-disable-next-line
  protected componentDidUpdate(oldProps: any, newProps: any) {
    return true;
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element(): HTMLElement | null {
    return this._element;
  }

  getContent(): HTMLElement | null {
    return this.element;
  }

  private _addEvents() {
    const { events } = this.props as any;
    if (!events || !this._element) {
      return;
    }

    Object.entries(events).forEach(([eventName, listener]) => {
      this._element.addEventListener(eventName, listener as EventListenerObject);
    });
  }

  private _removeEvents() {
    const { events } = this.props as any;

    if (!events || !this._element) {
      return;
    }

    Object.entries(events).forEach(([eventName, listener]) => {
      this._element.removeEventListener(eventName, listener as EventListenerObject);
    });
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  private _render() {
    const fragment = this.render();
    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }

    this._element = newElement;

    this._addEvents();
  }

  private _makePropsProxy(props: any) {
    const self = this;
    const proxyProps = new Proxy(props as unknown as object, {
      get(target: Record<string, unknown>, prop: string) {
        if (prop.startsWith('_')) {
          throw new Error('Нет прав');
        }
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: Record<string, unknown>, prop: string, value: unknown) {
        const oldTarget = { ...target };

        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      //  eslint-disable-next-line
      deleteProperty(target: Record<string, unknown>, prop: string) {
        throw new Error('нет доступа');
      },
      ownKeys(target: Record<string, unknown>) {
        return Object.keys(target).filter((key) => !key.startsWith('_'));
      },
    });
    return proxyProps;
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }

  divideChildrenProps(propsAndChildren: Record<string, unknown>) {
    const children = {};
    const props = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  protected initChildren() {

  }

  makeStub(context: any) {
    const stub = { ...context };
    Object.entries(this.children).forEach(([key, child]) => {
      stub[key] = `<div data-id="id-${child.id}"></div>`;
    });
    return stub;
  }

  substituteStub(fragment: HTMLTemplateElement) {
    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="id-${child.id}"]`);
      if (!stub) {
        return;
      }
      stub.replaceWith(child.getContent()!);
    });
  }

  compile(template: (context: any) => string, context: any) {
    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;
    const stub = this.makeStub(context);
    fragment.innerHTML = template(stub);
    this.substituteStub(fragment);
    return fragment.content;
  }
}
