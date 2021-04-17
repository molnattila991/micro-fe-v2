import { TodoItem } from "../../domain";
import { IStateCommand } from "./state-command.interface";

export interface ITodoStateCommand extends IStateCommand<TodoItem> {
    refresh(): void;
    filterList(text: any): void;
}