import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './add-book-watchitem.component.html',
})
export class AddBookWatchitemComponent implements OnInit {
  isDirty: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['/books'])
  }

  checkDirtyState() : boolean {
    return false;
  }

}
