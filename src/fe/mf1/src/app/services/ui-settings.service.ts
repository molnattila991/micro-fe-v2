import { Inject, Injectable } from '@angular/core';
import { INJECTION_TOKEN, IRootStateCommand, IRootStateQuery } from 'projects/core/src/public-api';
import { Subject } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class UiSettingsService {

  private toggle$: Subject<void> = new Subject();
  constructor(
    @Inject(INJECTION_TOKEN.STATE.COMMAND.ROOT) private command: IRootStateCommand,
    @Inject(INJECTION_TOKEN.STATE.QUERY.ROOT) private query: IRootStateQuery
  ) {
    this.toggle$.pipe(
      withLatestFrom(
        this.query.getSidebarState()
      ),
      map(([action, value]) => value)
    ).subscribe(opened => {
      if (opened) {
        this.command.closeSidebar();
      } else {
        this.command.openSidebar();
      }
    })
  }

  toggle(): void {
    this.toggle$.next();
  }
}
