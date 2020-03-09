import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import bookdata from '../../dataaccess/books.json';


@Component({
  selector: 'book-thumbnail',
  templateUrl: './book-thumbnail.component.html'
})
export class BookThumbnailComponent implements OnInit {
  @Input() book: any;
  books: any = bookdata;

  constructor() { }

  ngOnInit(): void {
  }
}
