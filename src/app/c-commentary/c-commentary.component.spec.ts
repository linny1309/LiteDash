import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCommentaryComponent } from './c-commentary.component';

describe('CCommentaryComponent', () => {
  let component: CCommentaryComponent;
  let fixture: ComponentFixture<CCommentaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCommentaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
