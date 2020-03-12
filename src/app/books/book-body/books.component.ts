import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../shared/index';


@Component({
  templateUrl: './books.component.html'
})

export class BooksComponent implements OnInit {
  books: IBook[];

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
