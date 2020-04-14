import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddofferComponent } from './book-addoffer.component';

describe('BookAddofferComponent', () => {
  let component: BookAddofferComponent;
  let fixture: ComponentFixture<BookAddofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAddofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAddofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
