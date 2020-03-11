import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { BookService } from '../shared/book.service';

@Injectable()
export class BookRouteActivator implements CanActivate {
  constructor(private bookService: BookService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const bookExists = !!this.bookService.getBook(route.params['id']);

    if (!bookExists)
      this.router.navigate(['/404']);

    return bookExists;
  }


}
