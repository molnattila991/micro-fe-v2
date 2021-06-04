import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { busEvent, IBusConnector, INJECTION_TOKEN, UiState } from 'projects/core/src/public-api';
import { TodoBusHandlerService } from '../../../services/todo-bus-handler.service';

@Component({
  selector: 'lib-todo-page-container',
  templateUrl: './todo-page-container.component.html',
  styleUrls: ['./todo-page-container.component.css']
})
export class TodoPageContainerComponent implements OnInit, OnDestroy {

  opened$ = this.storeUI.select(state => state.ui.opened);

  constructor(
    private storeUI: Store<{ ui: UiState }>,
    private todoBus: TodoBusHandlerService,
    @Inject(INJECTION_TOKEN.BUS.CONNECTOR) private busConnector: IBusConnector
  ) { 
    this.busConnector.subscribe(busEvent.user.token.got, value=>{
      console.log("mf1", value);
    });
  }

  ngOnDestroy(): void {
    this.todoBus.createTodoUnSubscribe();
  }

  ngOnInit(): void {
    this.todoBus.createTodoSubscribe();
  }

  openDialog(): void {
    this.todoBus.openCreateDialog();
  }
}
