import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddnewbookComponent } from './book-addnewbook.component';

describe('BookAddnewbookComponent', () => {
  let component: BookAddnewbookComponent;
  let fixture: ComponentFixture<BookAddnewbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAddnewbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAddnewbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
