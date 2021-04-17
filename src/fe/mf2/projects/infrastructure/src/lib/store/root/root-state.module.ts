import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { uiReducer } from './ui.reducer';
import { AppEffects } from './ui.effects';
import { INJECTION_TOKEN } from 'projects/core/src/public-api';
import { RootStateCommand } from './root-state-command.service';
import { RootStateQuery } from './root-state-query.service';

@NgModule({
  imports: [
    StoreModule.forRoot({ui: uiReducer}),
    EffectsModule.forRoot([AppEffects])
  ],
  providers:[
    { provide: INJECTION_TOKEN.STATE.COMMAND.ROOT, useClass: RootStateCommand },
    { provide: INJECTION_TOKEN.STATE.QUERY.ROOT, useClass: RootStateQuery },
  ]
})
export class RootStateModule { }
