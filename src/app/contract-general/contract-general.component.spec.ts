import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractGeneralComponent } from './contract-general.component';

describe('ContractGeneralComponent', () => {
  let component: ContractGeneralComponent;
  let fixture: ComponentFixture<ContractGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
