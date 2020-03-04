import { Component, OnInit } from '@angular/core';
import bookdata from '../../dataaccess/books.json';


@Component({
  selector: 'books-list',
  templateUrl: './books.component.html'
})

export class BooksComponent implements OnInit {
  books: any = bookdata
  constructor() { }

  ngOnInit(): void {
  }

}
