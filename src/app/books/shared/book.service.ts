import bookdata from '../../../dataaccess/books.json';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookService {
  getBooks() {
    let subject = new Subject();
    setTimeout(() => { subject.next(BOOKS); subject.complete(); }, 100);
    return subject;
  }

  getBook(id: string) {
    return BOOKS.find(book => book.id === id);
  }

}

const BOOKS: any = bookdata;

