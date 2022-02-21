type Handler = (...args: unknown[]) => void;

// TODO: переделать хранилище listeners + методы на Map
export default class EventBus {
    private listeners: Record<string, Handler[]>;

    constructor() {
        this.listeners = {};
    };

    public on(event: string, callback: Handler): void {
        if (!this.listeners[event]) {
            this.listeners[event] = []
        }

        this.listeners[event].push(callback);
    };

    public off(event: string, callback: Handler): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter((listener: Function) => listener !== callback);
    };

    public emit(event: string, ...args: unknown[]): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach((callback: Function) => {
            callback(...args);
        })
    };
}