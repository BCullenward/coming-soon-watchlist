import bookdata from '../../../dataaccess/books.json';
import userwatchlist from '../../../dataaccess/user-watchlist.json';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IBook } from './book-interface.model';
import { IUserWatchList, IBooklist } from '../../users/user-watchlist-interface.model';


let BOOKS: IBook[] = bookdata;
let WATCHLIST: IUserWatchList[] = userwatchlist;

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor() {
  }

  getBooks(): Observable<IBook[]> {
    let subject = new Subject<IBook[]>();
    setTimeout(() => { subject.next(BOOKS); subject.complete(); }, 100);
    return subject;
  }

  getBook(id: string): IBook {
    return BOOKS.find(book => book.id === id);
  }


  // This will get all the books the user has flagged to be watched.
  getBooksByUserID(userid: number): Observable<IBook[]> {
    const watch = WATCHLIST.find(u => u.userid === userid);
    //const comb: IBook[] = BOOKS.map(x => Object.assign(x, watch.find(y => y.watchlist?.books?.id === x.id)));

    let booklist: IBook[] = [];

    if (watch.watchlist.books) {
      for (let book of watch.watchlist.books)
      {
        //watch.watchlist.books.map(w => booklist.push(BOOKS.find(b => b.id = book.id)));
        booklist.push(BOOKS.find(b => b.id === book.id));
      }
    }

    let blst = new Subject<IBook[]>();
    setTimeout(() => { blst.next(booklist); blst.complete(); }, 100);
    return blst;
  }

}

