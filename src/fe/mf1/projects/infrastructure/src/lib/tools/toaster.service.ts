import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IToaster, ToasterOption } from 'projects/core/src/public-api';

@Injectable()
export class ToasterService implements IToaster {

  constructor(private toastr: ToastrService) { }
  error(message: string, title: string, option?: ToasterOption): void {
    this.toastr.error(message, title, option);
  }
}
