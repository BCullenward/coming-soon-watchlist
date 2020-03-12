import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMoviesComponent } from './nav-movies.component';

describe('NavMoviesComponent', () => {
  let component: NavMoviesComponent;
  let fixture: ComponentFixture<NavMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
