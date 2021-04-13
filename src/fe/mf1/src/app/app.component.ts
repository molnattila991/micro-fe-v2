import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiState } from './models/ui-state.interface';
import { UiSettingsService } from './services/ui-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eurofins-app';

  constructor(private uiSettings: UiSettingsService) {

  }

  toggle() {
    this.uiSettings.toggle();
  }
}
