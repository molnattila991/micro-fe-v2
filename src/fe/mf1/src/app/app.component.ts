import { Component } from '@angular/core';
import { UiSettingsService } from './services/ui-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private uiSettings: UiSettingsService) {

  }

  toggle() {
    this.uiSettings.toggle();
  }
}
