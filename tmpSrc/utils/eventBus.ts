// TODO: переделать хранилище listeners + методы на Map
class EventBus {
    private listeners: Record<string, Function[]>;

    constructor() {
        this.listeners = {};
    };

    public on(event: string, callback: Function) {
        if (!this.listeners[event]) {
            this.listeners[event] = []
        }

        this.listeners[event].push(callback);
    };

    public off(event: string, callback: Function) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter((listener: Function) => listener !== callback);
    };

    public emit<T>(event: string, ...args: T[]) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach((callback: Function) => {
            callback(...args);
        })
    };
}