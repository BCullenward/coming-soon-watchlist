import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGamesComponent } from './nav-games.component';

describe('NavGamesComponent', () => {
  let component: NavGamesComponent;
  let fixture: ComponentFixture<NavGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
