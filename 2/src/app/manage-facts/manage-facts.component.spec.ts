import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFactsComponent } from './manage-facts.component';

describe('ManageFactsComponent', () => {
  let component: ManageFactsComponent;
  let fixture: ComponentFixture<ManageFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageFactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
