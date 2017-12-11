import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractAlertsComponent } from './contract-alerts.component';

describe('ContractAlertsComponent', () => {
  let component: ContractAlertsComponent;
  let fixture: ComponentFixture<ContractAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
