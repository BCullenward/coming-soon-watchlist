import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowBodyComponent } from './tvshow-body.component';

describe('TvshowBodyComponent', () => {
  let component: TvshowBodyComponent;
  let fixture: ComponentFixture<TvshowBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
