import { TestBed } from '@angular/core/testing';

import { TodoBusHandlerService } from './todo-bus-handler.service';

describe('TodoBusHandlerService', () => {
  let service: TodoBusHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoBusHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
