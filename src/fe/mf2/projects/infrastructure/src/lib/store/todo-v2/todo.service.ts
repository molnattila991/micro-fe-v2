import { Inject, Injectable } from '@angular/core';
import { IApiErrorHandler, IApiService, INJECTION_TOKEN, IToaster, ITodoStateCommand, ToasterOption, TodoItem } from 'projects/core/src/public-api';
import { combineLatest, merge, Subject } from 'rxjs';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { TodoQuery } from './todo.query';
import { TodoStore } from './todo.store';

@Injectable()
export class TodoService implements ITodoStateCommand {

  private refreshAction: Subject<void> = new Subject();

  constructor(
    private todoStore: TodoStore,
    private todoQuery: TodoQuery,
    @Inject(INJECTION_TOKEN.API.TODO) private dataProvider: IApiService<TodoItem>,
    @Inject(INJECTION_TOKEN.TOOLS.API.ERRORHANDLER) private errorHandler: IApiErrorHandler
  ) {

    merge(
      this.refreshAction,
      this.todoQuery.select(item => item.filter.text)
    ).pipe(
      switchMap((filter: any) => {
        if (filter && filter.text && filter.text != "") {
          return this.dataProvider.getAllFiltered(filter.text);
        } else {
          return this.dataProvider.getAll();
        }
      })
    ).subscribe(
      todoList => {
        this.todoStore.update({ todoItemsList: todoList })
      }, this.errorHandler.handle.bind(this.errorHandler)
    );
  }

  refresh(): void {
    this.refreshAction.next();
  }

  filterList(text: any): void {
    this.todoStore.update({ filter: { text } });
  }

  add(item: TodoItem): void {
    this.dataProvider.create(item).toPromise().then(
      ()=>this.refresh()
    ).catch(this.errorHandler.handle.bind(this.errorHandler));
  }

  edit(item: TodoItem): void {
    this.dataProvider.update(item).toPromise().then(
      ()=>this.refresh()
    ).catch(this.errorHandler.handle.bind(this.errorHandler));
  }

  delete(id: number): void {
    this.dataProvider.delete(id).toPromise().then(
      ()=>this.refresh()
    ).catch(this.errorHandler.handle.bind(this.errorHandler));
  }
}