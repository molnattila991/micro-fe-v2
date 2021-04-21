import { Inject, Injectable } from '@angular/core';
import { busEvent, IBusConnector, INJECTION_TOKEN, IStateCommand, ITodoActionService } from 'projects/core/src/public-api';
import { TodoItem } from "projects/core/src/public-api";

@Injectable()
export class ToggleBusHandlerService implements ITodoActionService<number> {

    constructor(
        @Inject(INJECTION_TOKEN.BUS.CONNECTOR) private busConnector: IBusConnector,
        @Inject(INJECTION_TOKEN.STATE.COMMAND.TODO) private store: IStateCommand<TodoItem>
    ) { }

    subscribe(): void {
        this.busConnector.subscribe(busEvent.todo.delete, (id) => {
            this.store.delete(id);
        });
    }

    unsubscribe(): void {
        this.busConnector.unSubscribe(busEvent.todo.edit);
    }

    perform(data: number): void {
        this.store.delete(data);
        this.busConnector.dispatchEvent(busEvent.todo.delete, data);
    }
}
