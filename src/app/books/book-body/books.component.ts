import { Component, OnInit } from '@angular/core';
import { BookService } from '.././index';
import { ToastrService } from '../../common/toastr.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './books.component.html'
})

export class BooksComponent implements OnInit {
  books: any;

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.books = this.route.snapshot.data['books'];
  }

  handleThumbnailClick(bookTitle) {
    this.toastr.success(bookTitle);
  }
}
