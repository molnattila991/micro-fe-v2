import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEditViewComponent } from './todo-edit-view.component';

describe('TodoEditViewComponent', () => {
  let component: TodoEditViewComponent;
  let fixture: ComponentFixture<TodoEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoEditViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
