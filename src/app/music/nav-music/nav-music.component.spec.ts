import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMusicComponent } from './nav-music.component';

describe('NavMusicComponent', () => {
  let component: NavMusicComponent;
  let fixture: ComponentFixture<NavMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
