import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { busEvent, IBusConnector, INJECTION_TOKEN } from 'projects/core/src/public-api';
import { UiState } from 'src/app/models/ui-state.interface';
import { TodoBusHandlerService } from '../../../services/todo-bus-handler.service';
import { TodoCreateContainerComponent } from '../../todo-dialog/todo-create-container/todo-create-container.component';

@Component({
  selector: 'lib-todo-page-container',
  templateUrl: './todo-page-container.component.html',
  styleUrls: ['./todo-page-container.component.css']
})
export class TodoPageContainerComponent implements OnInit, OnDestroy {

  opened$ = this.storeUI.select(state => state.ui.opened);

  constructor(
    private storeUI: Store<{ ui: UiState }>,
    private todoBus: TodoBusHandlerService
  ) { }

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
