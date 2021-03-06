import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  BookService,
  IBook,
  IIndustryIdentifiers,
  restrictedWords,
  specificLength,
  oneRequired
} from '../shared/index';
import { of } from 'rxjs';

@Component({
  templateUrl: './book-addnewbook-react.component.html',
  styleUrls: ['./book-addnewbook-react.component.css']
})

export class BookAddNewBookReactComponent implements OnInit {
  newBookForm: FormGroup;
  rating: string = "NOT_MATURE";
  categorylist = [];
  title: FormControl;
  subtitle: FormControl;
  bookDisplayNumber: FormControl;
  bookSeriesName: FormControl;
  authors: FormControl;
  publisher: FormControl;
  publishedDate: FormControl;
  maturityRating: FormControl;
  identifier: FormGroup;
  isbn10: FormControl;
  isbn13: FormControl;
  isbnother: FormControl;
  pageCount: FormControl;
  categories: FormControl;
  description: FormControl;
  thumbnail: FormControl;
  smallthumbnail: FormControl;

  constructor(private router: Router, private bookService: BookService, private formBuilder: FormBuilder) {
    this.newBookForm = this.formBuilder.group({
      categorylist: ['']
    });

    of(this.getCategories()).subscribe(categories => { this.categorylist = categories; })

  }

  ngOnInit(): void {
    this.getNewBook();
  }

  getCategories() {
    return [
        { id: 1, name: "Fiction" },
        { id: 2, name: "Family & Relationships" },
        { id: 3, name: "Business & Economics" },
        { id: 4, name: "Political Science" },
        { id: 5, name: "Crafts & Hobbies" },
        { id: 6, name: "Comics & Graphic Novels" },
        { id: 7, name: "Juvenile Fiction" },
        { id: 8, name: "Literary Criticism" },
        { id: 9, name: "Language Arts & Disciplines" }
    ];
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

  setIndustryIdentifiers(formValues) {
    let ids: IIndustryIdentifiers[] = [];
    let i: number = 0;

    if (formValues.identifier.isbn10.length === 10) {
      ids[i] = {
        type: "ISBN_10",
        identifier: formValues.identifier.isbn10
      };
      i += 1;
    }

    if (formValues.identifier.isbn13.length === 13) {
      ids[i] = {
        type: "ISBN_13",
        identifier: formValues.identifier.isbn13
      };
      i += 1;
    }

    if (formValues.identifier.isbnother.valid) {
      ids[i] = {
        type: "OTHER",
        identifier: formValues.identifier.isbnother
      };
      i += 1;
    }

    return ids;
  }

  saveBook(formValues) {
    // set the comma separted list of authors to an array
    formValues.authors = formValues.authors.split(',');

    // set industry identifiers
    let isbn: IIndustryIdentifiers[] = this.setIndustryIdentifiers(formValues);

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

    this.bookService.saveBookReact(book);

    this.router.navigate(['/books']);
  }

  getNewBook() {
    this.title = new FormControl('I Wrote A Book', Validators.required);
    this.subtitle = new FormControl('with this subtitle');
    this.bookDisplayNumber = new FormControl('', Validators.maxLength(2));
    this.bookSeriesName = new FormControl('');
    this.authors = new FormControl('joe author, jim author', Validators.required);
    this.publisher = new FormControl('My Pub', Validators.required);
    this.publishedDate = new FormControl('01/01/1983', Validators.required);
    this.maturityRating = new FormControl(false, Validators.required);

    this.isbn10 = new FormControl('1234567890', [specificLength(10)]);
    this.isbn13 = new FormControl('9112345612307', [specificLength(13)]);
    this.isbnother = new FormControl('',[]);

    this.pageCount = new FormControl(233, [Validators.required, Validators.maxLength(5)]);
    this.categories = new FormControl('', Validators.required);
    this.description = new FormControl('my desc', [Validators.required, Validators.maxLength(400), restrictedWords(['foo','bar']) ]);
    this.thumbnail = new FormControl('https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Rick_Sanchez.png/160px-Rick_Sanchez.png', Validators.required);
    this.smallthumbnail = new FormControl('https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Rick_Sanchez.png/160px-Rick_Sanchez.png', Validators.required);

    this.identifier = new FormGroup({
      isbn10: this.isbn10,
      isbn13: this.isbn13,
      isbnother: this.isbnother
    }, oneRequired([this.isbn10, this.isbn13, this.isbnother]));

    this.newBookForm = new FormGroup({
      title: this.title,
      subtitle: this.subtitle,
      bookDisplayNumber: this.bookDisplayNumber,
      bookSeriesName: this.bookSeriesName,
      authors: this.authors,
      publisher: this.publisher,
      publishedDate: this.publishedDate,
      maturityRating: this.maturityRating,
      identifier: this.identifier,
      pageCount: this.pageCount,
      categories: this.categories,
      description: this.description,
      thumbnail: this.thumbnail,
      smallthumbnail: this.smallthumbnail
    });

    //this.identiferGroup = new FormGroup({
    //  isbn10: this.isbn10,
    //  isbn13: this.isbn13,
    //  isbnother: this.isbnother
    //}, oneRequired);

  }


}
