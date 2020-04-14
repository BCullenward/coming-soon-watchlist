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
        amountInMicros: formValues.listPrice * 1000000,
        currencyCode: formValues.listPriceCurrencyCode
      },
      retailPrice: {
        amountInMicros: formValues.retailPrice * 1000000,
        currencyCode: formValues.retailPriceCurrencyCode
      },
      giftable: true
    };

    //console.log("formValues: ", formValues);
    //console.log("offer: ", offer);
    this.saveNewOffer.emit(offer);
  }

  getNewOffer() {
    this.offerType = new FormControl(1, Validators.required);
    this.listPrice = new FormControl('', Validators.required);
    this.listPriceCurrencyCode = new FormControl('', Validators.required);
    this.retailPrice = new FormControl('', Validators.required);
    this.retailPriceCurrencyCode = new FormControl('', Validators.required);

    this.newOfferForm = new FormGroup({
      offerType: this.offerType,
      listPrice: this.listPrice,
      listPriceCurrencyCode: this.listPriceCurrencyCode,
      retailPrice: this.retailPrice,
      retailPriceCurrencyCode: this.retailPriceCurrencyCode
    });
  }

}
