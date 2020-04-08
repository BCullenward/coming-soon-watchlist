// Server pagination example from michaelbromely.github.io/ngx-pagination/#/server-paging
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ToastrService } from '../../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../shared/index';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { PageEvent } from '@angular/material';

interface IServerResponse {
  items: IBook[];
  total: number;
}


@Component({
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BooksComponent implements OnInit {
  books: IBook[] = [];
  asyncBooks: Observable<IBook[]>;
  p: number = 1;
  total: number;
  loading: boolean;
  currentBooksToShow = [];

  //// MatPaginator Inputs
  //length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  pageEvent: PageEvent;


  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.loading = true;
    this.getAllBooks();
    this.getPage(1);

   // this.getPage(1);
    //this.currentBooksToShow = this.books.slice(0, this.pageSize);
    //console.log("current books: ", this.currentBooksToShow);

    //this.books = this.route.snapshot.data['books'];
    //this.getPage(1);
    //this.getBooks();
    //this.onPageChange(1);
    //console.log("current books 2: ", this.currentBooksToShow);
  }

  getPage(page: number) {
    this.loading = true;

    this.asyncBooks = serverCall(this.books, page).pipe(
      tap(res => {
        this.total = res.total;
        this.p = page;
      }), map(res => res.items)
    );

    console.log("total: ", this.total);
    this.loading = false;
  }

  getData(e) {
    //console.log("e: ", e);
    this.getPage(e.pageIndex + 1);
  }


  //onPageChange($event) {
  //  this.currentBooksToShow = this.books.slice($event.pageIndex * $event.pageSize, $event.pageIndex * $event.pageSize + $event.pageSize);
  //}

  //onPaginateChange(data) {
  //  this.currentBooksToShow = this.books.slice(0, data.pageSize);
  //}

  //getPage3(page: number) {
  //  this.loading = true;

  //  this.asyncBooks = serverCall(this.books, page).pipe(
  //    tap(res => {
  //      this.total = res.total;
  //      this.p = page;
  //      this.loading = false;
  //    }),
  //    map(res => res.items)
  //  );


  //  console.log("total: ", this.total);
  //  console.log("async: ", this.asyncBooks);
  //}

  handleThumbnailClick(bookTitle) {
    this.toastr.success(bookTitle);
  }

  //setPageSizeOptions(setPageSizeOptionsInput: string) {
  //  this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  //}

  getAllBooks() {
    this.books = this.route.snapshot.data['books'];
  }

}

/** Simulate async HTTP call with delayed observable **/
function serverCall(books: IBook[], page: number): Observable<IServerResponse> {
  const perPage = 10;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  let secs: number = 10 * 1000;

  //console.log("list: ", books.slice(start, end));
  return of({
    items: books.slice(start, end),
    total: books.length
  }).pipe(delay(1000));
}
