import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService, IBook, IIndustryIdentifiers } from '../shared/index';

@Component({
  templateUrl: './book-addnewbook.component.html',
  styleUrls: ['./book-addnewbook.component.css']
})

export class BookAddNewBookComponent implements OnInit {
  isDirty: boolean = true;

  newBook: IBook;
  isbn: IIndustryIdentifiers[];

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
    this.newBook = this.getNewBook();
//    this.getNewISBN();

    //this.isbn.type = "ISBN_13";
  }

  onCategoriesChange(event: any) {
    this.selectedCategories = event;
  }

  cancel() {
    this.router.navigate(['/books']);
  }

  saveBook(formValues) {
    // set the categories
    formValues.volumeInfo.categories = this.selectedCategories.map(category => category.category);

    // set the comma separted list of authors to an array
    formValues.volumeInfo.authors = formValues.volumeInfo.authors.split(',');

    this.bookService.saveBook(formValues);

    this.isDirty = false;
    this.router.navigate(['/books']);
  }

  getNewISBN() {
    this.isbn[0] = {
      type: "ISBN_10",
      identifier: "1234567890"
    };

    this.isbn[1] = {
      type: "ISBN_13",
      identifier: "1234567890123"
    };

   // console.log("isbn: ", this.isbn);
  }

  getNewBook(): IBook {
    return {
      id: "",
      volumeInfo:
      {
        title: "",
        authors: [],
        publisher: "",
        publishedDate: "",
        description: "Wow, what a description!",
        imageLinks: {
          thumbnail: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Rick_Sanchez.png/160px-Rick_Sanchez.png",
          smallThumbnail: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Rick_Sanchez.png/160px-Rick_Sanchez.png"
        },
        categories: [],
        seriesInfo: {
          bookDisplayNumber: ""
        }
      }
    }
}


}
