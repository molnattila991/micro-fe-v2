export interface IStateCommand<T> {
    add(item: T): void;
    edit(item: T): void;
    delete(id: number): void;
}