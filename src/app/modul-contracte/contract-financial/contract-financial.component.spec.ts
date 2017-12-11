import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFinancialComponent } from './contract-financial.component';

describe('ContractFinancialComponent', () => {
  let component: ContractFinancialComponent;
  let fixture: ComponentFixture<ContractFinancialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractFinancialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
