import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { INJECTION_TOKEN } from 'projects/core/src/public-api';
import { ToasterService } from './toaster.service';

@NgModule({
  imports:[
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: INJECTION_TOKEN.TOOLS.TOASTER, useClass: ToasterService },
  ]
})
export class ToolsProviderModule { }
