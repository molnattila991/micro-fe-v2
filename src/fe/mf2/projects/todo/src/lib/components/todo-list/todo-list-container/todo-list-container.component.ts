import { Component, Inject, OnInit } from '@angular/core';
import { INJECTION_TOKEN, ITodoStateCommand, ITodoStateQuery, TodoItem, TodoModuleState } from "projects/core/src/public-api";
import { TodoBusHandlerService } from '../../../services/todo-bus-handler.service';

@Component({
  selector: 'lib-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent implements OnInit {
  list$ = this.query.getList();

  constructor(
    @Inject(INJECTION_TOKEN.STATE.QUERY.TODO) private query: ITodoStateQuery,
    @Inject(INJECTION_TOKEN.STATE.COMMAND.TODO) private command: ITodoStateCommand,

    private todoBus: TodoBusHandlerService
  ) { }

  delete(id: number) {
    this.todoBus.deleteTodo(id);
  }

  completedChanged(item: TodoItem): void {
    this.todoBus.toggleTodoCompleted(item);
  }

  ngOnDestroy(): void {
    this.todoBus.editTodoUnSubscribe();
    this.todoBus.deleteTodoUnSubscribe();
    this.todoBus.toggleTodoUnSubscribe();
  }

  ngOnInit(): void {
    this.command.refresh();
    this.todoBus.editTodoSubscribe();
    this.todoBus.deleteTodoSubscribe();
    this.todoBus.toggleTodoSubscribe();
  }

  openDialog(item: TodoItem): void {
    this.todoBus.openEditDialog(item);
  }
}
