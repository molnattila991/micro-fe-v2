import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TodoPageContainerComponent } from './components/todo-page/todo-page-container/todo-page-container.component';
import { TodoPageViewComponent } from './components/todo-page/todo-page-view/todo-page-view.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { todoReducer } from './store/todo.reducer';
import { TodoEffects } from './store/todo.effects';
import { TodoApiService } from './services/todo-api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { TodoDialogModule } from './components/todo-dialog/todo-dialog.module';
import { TodoListContainerComponent } from './components/todo-list/todo-list-container/todo-list-container.component';
import { TodoListViewComponent } from './components/todo-list/todo-list-view/todo-list-view.component';
import { TodoFilterModule } from './components/todo-filter/todo-filter.module';
import { TodoBusHandlerService } from './services/todo-bus-handler.service';

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
    TodoListViewComponent
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
    StoreModule.forFeature("todo", todoReducer),
    EffectsModule.forFeature([TodoEffects]),

    TodoDialogModule,
    TodoFilterModule,
  ],
  providers: [
    TodoApiService,
    TodoBusHandlerService
  ]
})
export class TodoModule { }
