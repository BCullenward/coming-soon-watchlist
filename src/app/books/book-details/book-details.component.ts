import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../shared/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: IBook;
  ISBN13: string;
  ISBN10: string;
  ISBNOTHER: string;

  constructor(private bookService: BookService, private route:ActivatedRoute, public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.book = this.bookService.getBook(this.route.snapshot.params['id']);

    //get ISBN if it exists
    if (this.book.volumeInfo.industryIdentifiers) {
      this.book.volumeInfo.industryIdentifiers.map(i => {
        if (i.type === "ISBN_13") {
          this.ISBN13 = i.identifier;
        }
        if (i.type === "ISBN_10") {
          this.ISBN10 = i.identifier;
        }
        if (i.type === "OTHER") {
          this.ISBNOTHER = i.identifier;
        }
      });
    }
  }

  sendGetRequest() {
    if (this.ISBN13) {
      //let url: string = "http://www.librarything.com/api/json/workinfo.js?ids=" + this.ISBN13;
      //let url: string = "http://www.librarything.com/isbn/" + this.ISBN13;
      let url: string = "http://www.librarything.com/services/rest/1.1/?method=librarything.ck.getwork&id=1060&apikey=ac5084a7b916475163f91f8684646e16";
      let hders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/xml',
        'Accept': 'application/xml',
        'Access-Control-Allow-Origin': 'http://localhost:4200/'
      });

      console.log("url: ", url)
      this.httpClient.get(url).subscribe((res) => {
        console.log(res);
      }), { headers: hders };
    }
  }

  //getContent(subs: Array<string>): Observable<IContent> {
  //  return (() => {
  //    return this.http.get<IContent>((() => {
  //      let r = this.root;
  //      subs.forEach((s, i, a) => {
  //        if (i === a.length - 1) {
  //          r += s;
  //        }
  //        else {
  //          if (s !== '/') {
  //            r += s;
  //          }
  //        }
  //      });
  //      return r;
  //    })(), {
  //      headers: this.corsHeaders
  //    });

  //  })();
  //}



}
