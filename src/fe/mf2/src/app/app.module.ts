import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { uiReducer } from './state/ui.reducer';
import { UiSettingsService } from './services/ui-settings.service';
import { AppEffects } from './state/ui.effects';
import { BusProviderModule } from 'projects/infrastructure/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({ui: uiReducer}),
    EffectsModule.forRoot([AppEffects]),

    BusProviderModule
  ],
  providers: [
    UiSettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
