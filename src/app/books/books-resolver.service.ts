import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { BookService } from './index';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BooksResolver implements Resolve<any> {
  constructor(private bookService: BookService) {

  }

  resolve() {
    return this.bookService.getBooks().pipe(map(books => books))
  }
}
