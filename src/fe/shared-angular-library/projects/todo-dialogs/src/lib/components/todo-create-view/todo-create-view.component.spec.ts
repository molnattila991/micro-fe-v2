import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreateViewComponent } from './todo-create-view.component';

describe('TodoCreateViewComponent', () => {
  let component: TodoCreateViewComponent;
  let fixture: ComponentFixture<TodoCreateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCreateViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
