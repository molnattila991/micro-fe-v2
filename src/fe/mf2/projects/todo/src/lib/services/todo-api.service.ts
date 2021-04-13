import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TodoItem } from '../models/todo-item.interface';

@Injectable()
export class TodoApiService {
  private api = `${environment.apiPath}todo`;
  constructor(private http: HttpClient) {

  }

  getAll(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.api);
  }

  getAllFiltered(text: string): Observable<TodoItem[]> {
    return this.http.post<TodoItem[]>(
      this.api + "/filter",
      { text }
    );
  }

  create(item: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(
      this.api,
      item
    );
  }

  update(item: TodoItem): Observable<TodoItem> {
    return this.http.put<TodoItem>(
      this.api,
      item
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.api + "/" + id);
  }
}
