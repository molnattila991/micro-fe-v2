export interface ITodoActionService<T> {
    subscribe(): void;
    unsubscribe(): void;
    perform(data: T): void;
}