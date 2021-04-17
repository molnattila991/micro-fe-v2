import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { INJECTION_TOKEN } from 'projects/core/src/public-api';
import { ApiErrorHandlerService } from './api-error-handler.service';
import { ToasterService } from './toaster.service';

@NgModule({
  imports:[
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: INJECTION_TOKEN.TOOLS.TOASTER, useClass: ToasterService },
    { provide: INJECTION_TOKEN.TOOLS.API.ERRORHANDLER, useClass: ApiErrorHandlerService}
  ]
})
export class ToolsProviderModule { }
