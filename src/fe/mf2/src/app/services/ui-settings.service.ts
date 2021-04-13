import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { UiState } from '../models/ui-state.interface';
import { closeSideNav, openSideNav } from '../state/ui.actions';

@Injectable()
export class UiSettingsService {

  private toggle$: Subject<void> = new Subject();
  constructor(private storeUI: Store<{ ui: UiState }>) {
    this.toggle$.pipe(
      withLatestFrom(
        this.storeUI.select(state => state.ui.opened)
      ),
      map(([action, value]) => value)
    ).subscribe(opened => {
      if (opened) {
        this.storeUI.dispatch(closeSideNav());
      } else {
        this.storeUI.dispatch(openSideNav());
      }
    })
  }

  toggle(): void {
    this.toggle$.next();
  }
}
