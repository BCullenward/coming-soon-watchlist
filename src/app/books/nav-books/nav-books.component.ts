import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../users/auth.service';

@Component({
  selector: 'nav-books',
  templateUrl: './nav-books.component.html',
  styleUrls: ['./nav-books.component.css']
})
export class NavBooksComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
