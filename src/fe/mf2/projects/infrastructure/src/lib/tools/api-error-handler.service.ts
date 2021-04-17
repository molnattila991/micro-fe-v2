import { Inject, Injectable } from '@angular/core';
import { IApiErrorHandler, INJECTION_TOKEN, IToaster, ToasterOption } from 'projects/core/src/public-api';

@Injectable()
export class ApiErrorHandlerService implements IApiErrorHandler {

  constructor(@Inject(INJECTION_TOKEN.TOOLS.TOASTER) private toastr: IToaster) { }

  handle(error: any) {
    if (error.status == 0) {
      this.toastr.error('Server cannot be reached.', 'Error');
    }
    if (error.status == 400) {
      if (error.error && error.error.errors) {
        let messageHtml = "<ul>";
        const errorObject = error.error.errors;
        Object.keys(errorObject).forEach(errorItem => {
          errorObject[errorItem].forEach((message: string) => {
            messageHtml += `<li>${message}</li>`;
          });
        })
        messageHtml += "</ul>";
        this.toastr.error(messageHtml, 'Error', <ToasterOption>{ enableHtml: true, timeOut: 10000 });
      } else {
        this.toastr.error(error.statusText, 'Error');
      }
    }
  }
}
