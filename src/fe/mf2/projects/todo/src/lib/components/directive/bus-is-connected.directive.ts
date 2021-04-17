import { Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { IBusIsConnected, INJECTION_TOKEN } from 'projects/core/src/public-api';

@Directive({
  selector: '[busIsConnected]'
})
export class BusIsConnectedDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    @Inject(INJECTION_TOKEN.BUS.CONNECTOR) private busConnector: IBusIsConnected
  ) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.display = "none";
    this.elementRef.nativeElement.style.display = this.busConnector.isConnected() ? "none" : "block";
  }
}
