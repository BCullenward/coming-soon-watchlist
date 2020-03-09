import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'books-list',
  templateUrl: './books.component.html'
})

export class BooksComponent implements OnInit {
  @Input() BOOK: any;
  //book: any;
  //BOOK = {
  //  "id": "BdZjCAAAQBAJ",
  //  "volumeInfo": {
  //    "title": "Neil Gaiman's Lady Justice #1",
  //    "authors": [
  //      "C. J. Henderson",
  //      "Neil Gaiman",
  //      "Wendi Lee"
  //    ],
  //    "publisher": "Papercutz",
  //    "publishedDate": "2015-05-12",
  //    "description": "From the mind of New York Times Best-selling author and Eisner Award-winning author Neil Gaiman, Lady Justice is the living embodiment of justice, possessing oppressed women and giving them the ability to fight their tormentors. In times of trouble, the spirit of Justice appears before women and offers them the chance to take revenge on their male abusers. This graphic novel series will collect all of the classic Lady Justice comics for the first time anywhere.",
  //    "industryIdentifiers": [
  //      {
  //        "type": "ISBN_13",
  //        "identifier": "9781629913322"
  //      },
  //      {
  //        "type": "ISBN_10",
  //        "identifier": "1629913324"
  //      }
  //    ],
  //    "pageCount": 232,
  //    "printType": "BOOK",
  //    "categories": [
  //      "Comics & Graphic Novels"
  //    ],
  //    "averageRating": 3,
  //    "ratingsCount": 1,
  //    "maturityRating": "NOT_MATURE"
  //  },
  //  "imageLinks": {
  //    "smallThumbnail": "http://books.google.com/books/content?id=BdZjCAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  //    "thumbnail": "http://books.google.com/books/content?id=BdZjCAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  //  },
  //  "language": "en",
  //  "seriesInfo": {
  //    "bookDisplayNumber": "1",
  //    "volumeSeries": [
  //      {
  //        "seriesId": "IWv3GgAAABDXcM",
  //        "seriesBookType": "ISSUE",
  //        "orderNumber": 1
  //      }
  //    ]
  //  }
  //}


  constructor() { }

  ngOnInit(): void {
  }
}
