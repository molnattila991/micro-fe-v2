import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TodoPageContainerComponent } from './components/todo-page/todo-page-container/todo-page-container.component';
import { TodoPageViewComponent } from './components/todo-page/todo-page-view/todo-page-view.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoApiService } from './services/todo-api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { TodoDialogModule } from './components/todo-dialog/todo-dialog.module';
import { TodoListContainerComponent } from './components/todo-list/todo-list-container/todo-list-container.component';
import { TodoListViewComponent } from './components/todo-list/todo-list-view/todo-list-view.component';
import { TodoFilterModule } from './components/todo-filter/todo-filter.module';
import { BusIsConnectedDirective } from './components/directive/bus-is-connected.directive';
import { INJECTION_TOKEN } from 'projects/core/src/public-api';
import { TodoStateModule, TodoV2StateModule } from 'projects/infrastructure/src/public-api';
import { EditTodoBusHandlerService } from './services/edit-todo-bus-handler.service';
import { CreateTodoBusHandlerService } from './services/create-todo-bus-handler.service';
import { ToggleBusHandlerService } from './services/toggle-todo-bus-handler.service';
import { DeleteBusHandlerService } from './services/delete-todo-bus-handler.service';

const routes: Routes = [
  {
    path: '', component: TodoPageContainerComponent
  }
];

@NgModule({
  declarations: [
    TodoPageContainerComponent,
    TodoPageViewComponent,
    TodoListContainerComponent,
    TodoListViewComponent,
    BusIsConnectedDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forChild(routes),

    TodoV2StateModule,
    TodoDialogModule,
    TodoFilterModule,
  ],
  providers: [
    { provide: INJECTION_TOKEN.API.TODO, useClass: TodoApiService },
    { provide: INJECTION_TOKEN.BUSINESS_LOGIC.TODO.CREATE_DIALOG, useClass: EditTodoBusHandlerService },
    { provide: INJECTION_TOKEN.BUSINESS_LOGIC.TODO.EDIT_DIALOG, useClass: CreateTodoBusHandlerService },
    { provide: INJECTION_TOKEN.BUSINESS_LOGIC.TODO.ACTION.TOGGLE, useClass: ToggleBusHandlerService },
    { provide: INJECTION_TOKEN.BUSINESS_LOGIC.TODO.ACTION.DELETE, useClass: DeleteBusHandlerService }
  ],
  exports: [
    BusIsConnectedDirective
  ]
})
export class TodoModule { }
