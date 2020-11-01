import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCjsTensorChartComponent } from './c-cjs-tensor-chart.component';

describe('CCjsTensorChartComponent', () => {
  let component: CCjsTensorChartComponent;
  let fixture: ComponentFixture<CCjsTensorChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCjsTensorChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCjsTensorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
