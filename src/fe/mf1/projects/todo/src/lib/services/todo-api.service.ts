import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService, TodoItem } from "projects/core/src/public-api";

@Injectable()
export class TodoApiService extends ApiService<TodoItem> {
  constructor(protected http: HttpClient) {
    super(http, `${environment.apiPath}todo`);
  }
}
