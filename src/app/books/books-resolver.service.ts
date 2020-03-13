import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { BookService } from './index';
import { map } from 'rxjs/operators';
import { AuthService } from '../users/auth.service';

@Injectable({ providedIn: 'root' })
export class BooksResolver implements Resolve<any> {
  constructor(private bookService: BookService, private auth: AuthService) {

  }

  resolve() {
    return this.bookService.getBooks().pipe(map(books => books))
  }

}
