import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicBodyComponent } from './music-body.component';

describe('MusicBodyComponent', () => {
  let component: MusicBodyComponent;
  let fixture: ComponentFixture<MusicBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
