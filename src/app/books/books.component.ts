import { Component, OnInit, Input } from '@angular/core';
import { BookService } from './shared/book.service';
import { ToastrService } from '../common/toastr.service';


@Component({

  templateUrl: './books.component.html'
})

export class BooksComponent implements OnInit {
  books: any[];

  constructor(private bookService: BookService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  handleThumbnailClick(bookTitle) {
    this.toastr.success(bookTitle);
  }
}
