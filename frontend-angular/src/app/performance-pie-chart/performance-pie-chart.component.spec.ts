import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancePieChartComponent } from './performance-pie-chart.component';

describe('PerformancePieChartComponent', () => {
  let component: PerformancePieChartComponent;
  let fixture: ComponentFixture<PerformancePieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerformancePieChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformancePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
