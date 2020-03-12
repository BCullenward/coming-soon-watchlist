import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTvshowsComponent } from './nav-tvshows.component';

describe('NavTvshowsComponent', () => {
  let component: NavTvshowsComponent;
  let fixture: ComponentFixture<NavTvshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTvshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
