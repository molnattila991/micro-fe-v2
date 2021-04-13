import { Injectable } from '@angular/core';
import { IBusConnector } from 'projects/core/src/public-api';
import { init, subscribe, createBusEvent, connectedToBus } from "@molnarattila991/bus/lib";

@Injectable()
export class BusConnectorService implements IBusConnector {

  constructor() {
    init();
  }
  isConnected(): boolean {
    return connectedToBus();
  }

  unSubscribe(eventName: string): void {
    console.log("Todo: Unsubscibe");
  }

  initialize(): void {
    if (connectedToBus() == false) {
      init();
    }
  }

  subscribe(eventName: string, func: (data: any) => void): void {
    subscribe(eventName, func);
  }

  dispatchEvent(eventName: string, data: any): void {
    createBusEvent(eventName, data);
  }
}
