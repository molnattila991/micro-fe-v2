import { NgModule } from '@angular/core';
import { INJECTION_TOKEN } from 'projects/core/src/public-api';
import { ToasterService } from './toaster.service';

@NgModule({
  providers: [
    { provide: INJECTION_TOKEN.TOOLS.TOASTER, useClass: ToasterService },
  ]
})
export class ToolsProviderModule { }
