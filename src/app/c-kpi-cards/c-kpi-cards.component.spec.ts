import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CKpiCardsComponent } from './c-kpi-cards.component';

describe('CKpiCardsComponent', () => {
  let component: CKpiCardsComponent;
  let fixture: ComponentFixture<CKpiCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CKpiCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CKpiCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
