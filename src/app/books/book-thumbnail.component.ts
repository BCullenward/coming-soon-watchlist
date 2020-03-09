import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-thumbnail',
  templateUrl: './book-thumbnail.component.html',
  styleUrls: ['./book-thumbnail.component.css', '../watchlist-app.component.css']
})
export class BookThumbnailComponent implements OnInit {
  @Input() book: any;

  constructor() { }

  ngOnInit(): void {
  }

  getMaturityRating() {
    if (this.book.volumeInfo
      && this.book.volumeInfo.maturityRating === 'MATURE')
      return "red bold";
    return "";
  }
}
