import EventBus from "./eventBus";

enum EVENTS {
    INIT = "init",
    FLOW_CDM = "flow:component-did-mount",
    FLOW_CDU = "flow:component-did-update",
    FLOW_RENDER = "flow:render"
};

type TBlockMeta = {
    tagName: string,
    props: any,
}

export abstract class Block {
    private static EVENTS = EVENTS;
    private _element: HTMLElement | null = null;
    private meta: TBlockMeta = null;
    private eventBus: () => EventBus = null;
    private props: ProxyConstructor | any; // по сути всегда делаем прокси 

    constructor(tagName: string = "div", props: any = {}) {
        const eventBus = new EventBus();

        this.meta = {
            tagName,
            props
        };

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);

        this.eventBus().emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    _createDocumentElement(tagName) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }

    _createResources() {
        const { tagName } = this.meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidMount() {
        this.componentDidMount();
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidMount() {
    }

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidUpdate(oldProps: any, newProps: any) {
        const response = this.componentDidUpdate(oldProps, newProps);
        return response;
    }

    // Может переопределять пользователь, + реализовать глубокое сравнение
    componentDidUpdate(oldProps: any, newProps: any) {
        return true;
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    // get element() {
    //     return this._element;
    // }

    getContent() {
        return this._element;
    }

    render(): string { 
        return '';
    }

    _addEvents() {
        const events: Record<string, () => void> = (this.props as any).events;

        if (!events || !this._element) {
            return;
        }

        Object.entries(events).forEach(([eventName, listener]) => {
            this._element.addEventListener(eventName, listener);
        })
    }

    _removeEvents() {
        const events: Record<string, () => void> = (this.props as any).events;

        if (!events || !this._element) {
            return;
        }

        Object.entries(events).forEach(([eventName, listener]) => {
            this._element.removeEventListener(eventName, listener);
        })
    }
    
    _render() {
        const block = this.render();
        
        this._removeEvents();

        this._element.innerHTML = block;

        this._addEvents();
    }

    _makePropsProxy(props: any) {
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
                const oldTarget = target;
                if (prop.startsWith('_')) {
                    throw new Error('Нет прав');
                }
                if (value !== target[prop]) {
                    target[prop] = value;
                    self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                }
                return true;
            },
            deleteProperty(target: Record<string, unknown>, prop: string) {
                if (prop.startsWith('_')) {
                    throw new Error('нет доступа');
                }
                delete target[prop];
                return true;
            },
            ownKeys(target: Record<string, unknown>) {
                return Object.keys(target).filter(key => !key.startsWith('_'));
            }
        });
        return proxyProps;
    }

    show() {
        this.getContent().style.display = 'block';
    }

    hide() {
        this.getContent().style.display = 'none';
    }
}