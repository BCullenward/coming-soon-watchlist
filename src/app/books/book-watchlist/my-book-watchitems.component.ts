import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../users/auth.service';
import { BookService, IBook } from '../shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './my-book-watchitems.component.html',
  styleUrls: ['./my-book-watchitems.component.css']
})
export class MyBookWatchitemsComponent implements OnInit {
  books: IBook[];

  constructor(private auth: AuthService, private bookserv: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookserv.getBooksByUserID(this.auth.currentUser.id).subscribe(result => this.books=result);
  }

}
