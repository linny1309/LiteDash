import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COptionsMenuComponent } from './c-options-menu.component';

describe('COptionsMenuComponent', () => {
  let component: COptionsMenuComponent;
  let fixture: ComponentFixture<COptionsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COptionsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COptionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
