import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddnewbookReactComponent } from './book-addnewbook-react.component';

describe('BookAddnewbookReactComponent', () => {
  let component: BookAddnewbookReactComponent;
  let fixture: ComponentFixture<BookAddnewbookReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAddnewbookReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAddnewbookReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
