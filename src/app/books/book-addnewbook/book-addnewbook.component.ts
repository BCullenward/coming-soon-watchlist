import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './book-addnewbook.component.html',
  styleUrls: ['./book-addnewbook.component.css']
})
export class BookAddNewBookComponent implements OnInit {
  isDirty: boolean = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['/books']);
  }

  saveBook(formValues) {
    console.log(formValues);
  }
}
