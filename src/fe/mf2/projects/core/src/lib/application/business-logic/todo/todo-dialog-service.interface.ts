import { TodoItem } from "../../../domain";

export interface ITodoDialogService {
    subscribe(): void;
    unsubscribe(): void;
    open(item?: TodoItem): void;
}