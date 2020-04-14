import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IOffers } from '../shared/index';

@Component({
  selector: 'book-addoffer',
  templateUrl: './book-addoffer.component.html',
  styleUrls: ['./book-addoffer.component.css']
})
export class BookAddOfferComponent implements OnInit {
  @Output() saveNewOffer = new EventEmitter();

  newOfferForm: FormGroup;
  offerType: FormControl;
  listPrice: FormControl;
  listPriceCurrencyCode: FormControl;
  retailPrice: FormControl;
  retailPriceCurrencyCode: FormControl;
  buyLink: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.getNewOffer();
  }

  cancel() {

  }

  saveOffer(formValues) {
    let offer: IOffers = {
      id: undefined,
      finskyOfferType: +formValues.offerType,
      listPrice: {
        amountInMicros: this.getPriceInMicros(formValues.listPrice),
        currencyCode: formValues.listPriceCurrencyCode
      },
      retailPrice: {
        amountInMicros: this.getPriceInMicros(formValues.retailPrice),
        currencyCode: formValues.retailPriceCurrencyCode
      },
      buyLink: formValues.buyLink,
      giftable: true
    };

    //console.log("formValues: ", formValues);
    //console.log("offer: ", offer);
    this.saveNewOffer.emit(offer);
  }

  getPriceInMicros(price) {
    if (price)
      return price * 1000000;
  }

  getNewOffer() {
    this.offerType = new FormControl(1, Validators.required);
    this.listPrice = new FormControl('', Validators.required);
    this.listPriceCurrencyCode = new FormControl('', Validators.required);
    this.retailPrice = new FormControl('', Validators.required);
    this.retailPriceCurrencyCode = new FormControl('', Validators.required);
    this.buyLink = new FormControl('', Validators.required);

    this.newOfferForm = new FormGroup({
      offerType: this.offerType,
      listPrice: this.listPrice,
      listPriceCurrencyCode: this.listPriceCurrencyCode,
      retailPrice: this.retailPrice,
      retailPriceCurrencyCode: this.retailPriceCurrencyCode,
      buyLink: this.buyLink
    });
  }

  getLink(buyLink) {

  }

}
