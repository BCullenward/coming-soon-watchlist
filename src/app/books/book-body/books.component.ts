import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ToastrService } from '../../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IBook, BookService } from '../shared/index';
import { MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';


@Component({
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  books: IBook[] = [];
  booksToDisplay: IBook[] = [];
  pageEvent: PageEvent;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5,10,25,100]
  currentPage: number = 0;
  loading: boolean = true;
  dataSource: any;
  total: number;

  length = 100;


  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private bksrv: BookService) {
  }


  ngOnInit() {
    this.loading = true
    this.getAllBooks();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public handlePage(e?: PageEvent) {
    //console.log("e: ", e);
    if (e) {
      this.pageSize = e.pageSize;
      this.currentPage = e.pageIndex;
    }
    this.iterator();
  }

  iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    this.booksToDisplay = this.books.slice(start, end);
    this.dataSource = this.booksToDisplay;
  }

  handleThumbnailClick(bookTitle) {
    this.toastr.success(bookTitle);
  }


  getAllBooks() {
    this.bksrv.getBooks()
      .subscribe((response) => {
        this.dataSource = new MatTableDataSource<IBook>(response);
        this.dataSource.paginator = this.paginator;
        this.books = response;
        this.total = this.books.length;
        this.handlePage(null);
      });
  }

}
