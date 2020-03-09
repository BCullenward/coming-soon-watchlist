import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: any;
  ISBN13: string;
  //authors: string[] = [];
  constructor(private bookService: BookService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.book = this.bookService.getBook(this.route.snapshot.params['id']);

    //get ISBN13 if it exists
    if (this.book.volumeInfo.industryIdentifiers) {
      this.book.volumeInfo.industryIdentifiers.map(i => {
        if (i.type === "ISBN_13") {
          this.ISBN13 = i.identifier;
        }
      });
    }

    //authors list
    //this.authors = this.book.volumeInfo.authors.split(',');
    //console.log(this.book.volumeInfo.authors);
    //this.book.volumeInfo.authors.map(a => this.authors.push(a));

  }



}
