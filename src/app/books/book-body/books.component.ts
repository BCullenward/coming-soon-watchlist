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
  loading: boolean = true;
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
  }

  getPage(page: number) {
    this.loading = true;

    this.asyncBooks = serverCall(this.books, page, this.pageSize).pipe(
      tap(res => {
        this.total = res.total;
        this.p = page;
      }), map(res => res.items)
    );
    this.loading = false;
  }

  getData(e) {
    if (e.pageSize != this.pageSize) {
      this.pageSize = e.pageSize;
      this.getPage(0);
    }
    console.log("e: ", e);
    this.getPage(e.pageIndex + 1);
  }

  handleThumbnailClick(bookTitle) {
    this.toastr.success(bookTitle);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  getAllBooks() {
    this.books = this.route.snapshot.data['books'];
  }

}

/** Simulate async HTTP call with delayed observable **/
function serverCall(books: IBook[], page: number, pageSize: number): Observable<IServerResponse> {
  const perPage = pageSize;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  let secs: number = 1 * 1000;

  //console.log("list: ", books.slice(start, end));
  return of({
    items: books.slice(start, end),
    total: books.length
  }).pipe(delay(100));
}
