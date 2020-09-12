import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCjsChartComponent } from './c-cjs-chart.component';

describe('CCjsChartComponent', () => {
  let component: CCjsChartComponent;
  let fixture: ComponentFixture<CCjsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCjsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCjsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
