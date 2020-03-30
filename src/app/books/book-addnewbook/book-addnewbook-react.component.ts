import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService, IBook, IIndustryIdentifiers, restrictedWords } from '../shared/index';

@Component({
  templateUrl: './book-addnewbook-react.component.html',
  styleUrls: ['./book-addnewbook-react.component.css']
})

export class BookAddNewBookReactComponent implements OnInit {
  newBookForm: FormGroup;
  title: FormControl;
  subtitle: FormControl;
  bookDisplayNumber: FormControl;
  authors: FormControl;
  publisher: FormControl;
  publishedDate: FormControl;
  maturityRating: FormControl;
  identifiertype: FormControl;
  identifier: FormControl;
  pageCount: FormControl;
  bookCategories: FormControl;
  description: FormControl;
  thumbnail: FormControl;
  smallthumbnail: FormControl;

  rating: string = "NOT_MATURE";

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

  constructor(private router: Router, private bookService: BookService) {

  }

  ngOnInit(): void {
    this.getNewBook();
  }



  onCategoriesChange(event: any) {
    this.selectedCategories = event;
    console.log("categories: ", this.selectedCategories);
  }

  onMaturityChange(isChecked: boolean) {
    if (isChecked) {
      this.rating = "MATURE";
    }
    else {
      this.rating = "NOT_MATURE";
    }
  }

  cancel() {
    //console.log("invalid controls: ", this.findInvalidControls());
    this.router.navigate(['/books']);
  }

  findInvalidControls() {
    const invalid = [];
    const controls = this.newBookForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }


  saveBook(formValues) {
    // set the categories
    formValues.categories = this.selectedCategories.map(category => category.category);

    // set the comma separted list of authors to an array
    formValues.authors = formValues.authors.split(',');

    // set industry identifiers
    let isbn: IIndustryIdentifiers[] = []
    isbn[0] = {
      type: formValues.identifiertype,
      identifier: formValues.identifier
    };

    // set maturity rating
    //let rating = "NOT_MATURE";
    //if (formValues.maturityRating.checked) {
    //  rating = "MATURE";
    //}

    let book: IBook = {
      id: undefined,
      volumeInfo: {
        title: formValues.title,
        subtitle: formValues.subtitle,
        authors: formValues.authors,
        publisher: formValues.publisher,
        publishedDate: formValues.publishedDate,
        categories: formValues.categories,
        description: formValues.description,
        industryIdentifiers: isbn,
        pageCount: formValues.pageCount,
        maturityRating: this.rating,
        imageLinks: {
          thumbnail: formValues.thumbnail,
          smallThumbnail: formValues.smallthumbnail
        },
        seriesInfo: {
          bookDisplayNumber: formValues.bookDisplayNumber
        }
      }
    }


    console.log(book);

    this.bookService.saveBookReact(book);

    //this.isDirty = false;
    this.router.navigate(['/books']);
  }

  getNewBook() {
    this.title = new FormControl('I Wrote A Book', Validators.required);
    this.subtitle = new FormControl('with this subtitle');
    this.bookDisplayNumber = new FormControl('', Validators.maxLength(2));
    this.authors = new FormControl('joe author, jim author', Validators.required);
    this.publisher = new FormControl('My Pub', Validators.required);
    this.publishedDate = new FormControl('01/01/1983', Validators.required);
    this.maturityRating = new FormControl(false, Validators.required);
    this.identifiertype = new FormControl('ISBN_10', Validators.required);
    this.identifier = new FormControl('1234561230', Validators.required);

    this.pageCount = new FormControl(233, [Validators.required, Validators.maxLength(5)]);
    this.bookCategories = new FormControl('');
    this.description = new FormControl('my desc', [Validators.required, Validators.maxLength(400), restrictedWords(['foo','bar']) ]);
    this.thumbnail = new FormControl('https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Rick_Sanchez.png/160px-Rick_Sanchez.png', Validators.required);
    this.smallthumbnail = new FormControl('https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Rick_Sanchez.png/160px-Rick_Sanchez.png', Validators.required);

    this.newBookForm = new FormGroup({
      title: this.title,
      subtitle: this.subtitle,
      bookDisplayNumber: this.bookDisplayNumber,
      authors: this.authors,
      publisher: this.publisher,
      publishedDate: this.publishedDate,
      maturityRating: this.maturityRating,
      identifiertype: this.identifiertype,
      identifier: this.identifier,
      pageCount: this.pageCount,
      bookCategories: this.bookCategories,
      description: this.description,
      thumbnail: this.thumbnail,
      smallthumbnail: this.smallthumbnail
    });

  }


}
