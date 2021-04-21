import { Inject, Injectable } from '@angular/core';
import { busEvent, IBusConnector, INJECTION_TOKEN, IStateCommand, ITodoActionService } from 'projects/core/src/public-api';
import { TodoItem } from "projects/core/src/public-api";

@Injectable()
export class DeleteBusHandlerService implements ITodoActionService<TodoItem> {

    constructor(
        @Inject(INJECTION_TOKEN.BUS.CONNECTOR) private busConnector: IBusConnector,
        @Inject(INJECTION_TOKEN.STATE.COMMAND.TODO) private store: IStateCommand<TodoItem>
    ) { }

    subscribe(): void {
        this.busConnector.subscribe(busEvent.todo.toggle, (item: TodoItem) => {
            this.store.edit({ ...item, isCompleted: !item.isCompleted });
        });
    }

    unsubscribe(): void {
        this.busConnector.unSubscribe(busEvent.todo.toggle);
    }

    perform(data: TodoItem): void {
        this.store.edit({ ...data, isCompleted: !data.isCompleted });
        this.busConnector.dispatchEvent(busEvent.todo.toggle, data);
    }
}
