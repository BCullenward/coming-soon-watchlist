import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWatchlistComponent } from './game-watchlist.component';

describe('GameWatchlistComponent', () => {
  let component: GameWatchlistComponent;
  let fixture: ComponentFixture<GameWatchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameWatchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
