import { Inject, NgModule } from '@angular/core';
import { IBusConnector, INJECTION_TOKEN } from 'projects/core/src/public-api';
import { BusConnectorService } from './bus-connector.service';



@NgModule({
  providers: [
    { provide: INJECTION_TOKEN.BUS.CONNECTOR, useClass: BusConnectorService },
  ]
})
export class BusProviderModule {
  constructor(
    @Inject(INJECTION_TOKEN.BUS.CONNECTOR) private busConnector: IBusConnector
  ) {

  }
}
