import { Component, OnInit, Input } from '@angular/core';
import { ISaleInfo } from '../shared/index';

@Component({
  selector: 'book-salesinfo',
  templateUrl: './sales-info.component.html',
  styleUrls: ['./sales-info.component.css']
})
export class SalesInfoComponent implements OnInit {
  @Input() saleInfo: ISaleInfo;

  constructor() { }

  ngOnInit(): void {
  }

  getOffer(offerType): string {
    let offer: string;

    switch (offerType) {
      case 1:
        offer = "New Physical";
        break;
      case 2:
        offer = "Digital";
        break;
      case 3:
        offer = "Used";
        break;
      default:
        offer = "Unknown";
        break;
    }

    return offer;
  }

  getAmountInDollars(amountInMicros) {
    if (amountInMicros) {
      return amountInMicros / 1000000;
    }
    else {
      return 0;
    }
  }

}
