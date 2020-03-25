import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../shared/index';

@Component({
  templateUrl: './book-addnewbook.component.html',
  styleUrls: ['./book-addnewbook.component.css']
})

export class BookAddNewBookComponent implements OnInit {
  isDirty: boolean = true;

  newBook;

   categories = [
    { id: 1, category: "Fiction" },
    { id: 2, category: "Family & Relationships" },
    { id: 3, category: "Business & Economics" },
    { id: 4, category: "Political Science" },
    { id: 5, category: "Crafts & Hobbies" },
    { id: 6, category: "Comics & Graphic Novels" },
    { id: 7, category: "Juvenile Fiction" },
    { id: 8, category: "Literary Criticism" },
    { id: 9, category: "Language Arts & Disciplines" }
  ];
  selectedCategories = [];

  constructor(private router: Router, private bookService:BookService) {

  }

  ngOnInit(): void {
    this.newBook.thumbnail = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Rick_Sanchez.png/160px-Rick_Sanchez.png";
    this.newBook.smallthumbnail = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Rick_Sanchez.png/160px-Rick_Sanchez.png"

  }


  cancel() {
    this.router.navigate(['/books']);
  }

  saveBook(formValues) {
    formValues.categories = this.selectedCategories;
    console.log("authors: ", formValues.authors.values);

    //console.log(formValues);
    this.bookService.saveBook(formValues);
    this.isDirty = false;
    this.router.navigate(['/books']);
  }

  formatAuthors(authors) {
    console.log(authors);
    return authors.join();
}


}
