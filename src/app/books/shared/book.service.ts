import bookdata from '../../../dataaccess/books.json';
import { Injectable } from '@angular/core';

@Injectable()
export class BookService {
  getBooks() {
    return books;
  }

  getBook(id: string) {
    return books.find(book => book.id === id);
  }

}

const books: any = bookdata;

