import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiState } from 'projects/core/src/public-api';
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
