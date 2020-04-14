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

}
