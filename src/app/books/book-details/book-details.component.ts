import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../shared/index';

@Component({
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: IBook;
  ISBN13: string;
  ISBN10: string;
  ISBNOTHER: string;

  constructor(private bookService: BookService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.book = this.bookService.getBook(this.route.snapshot.params['id']);

    //get ISBN if it exists
    if (this.book.volumeInfo.industryIdentifiers) {
      this.book.volumeInfo.industryIdentifiers.map(i => {
        if (i.type === "ISBN_13") {
          this.ISBN13 = i.identifier;
        }
        if (i.type === "ISBN_10") {
          this.ISBN10 = i.identifier;
        }
        if (i.type === "OTHER") {
          this.ISBNOTHER = i.identifier;
        }
      });
    }
  }
}
