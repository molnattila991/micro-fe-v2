import { Inject, Injectable } from '@angular/core';
import { IApiService, INJECTION_TOKEN, IToaster, ITodoStateCommand, ToasterOption, TodoItem } from 'projects/core/src/public-api';
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
    @Inject(INJECTION_TOKEN.TOOLS.TOASTER) private toastr: IToaster
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
      }, this.handleApiError.bind(this)
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
    ).catch(this.handleApiError.bind(this));
  }

  edit(item: TodoItem): void {
    this.dataProvider.update(item).toPromise().then(
      ()=>this.refresh()
    ).catch(this.handleApiError.bind(this));
  }

  delete(id: number): void {
    this.dataProvider.delete(id).toPromise().then(
      ()=>this.refresh()
    ).catch(this.handleApiError.bind(this));
  }

  private handleApiError(error: any) {
    if (error.status == 0) {
      this.toastr.error('Server cannot be reached.', 'Error');
    }
    if (error.status == 400) {
      if (error.error && error.error.errors) {
        let messageHtml = "<ul>";
        const errorObject = error.error.errors;
        Object.keys(errorObject).forEach(errorItem => {
          errorObject[errorItem].forEach((message: string) => {
            messageHtml += `<li>${message}</li>`;
          });
        })
        messageHtml += "</ul>";
        this.toastr.error(messageHtml, 'Error', <ToasterOption>{ enableHtml: true, timeOut: 10000 });
      } else {
        this.toastr.error(error.statusText, 'Error');
      }
    }
  }
}