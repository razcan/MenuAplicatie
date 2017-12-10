import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaAdreseComponent } from './adauga-adrese.component';

describe('AdaugaAdreseComponent', () => {
  let component: AdaugaAdreseComponent;
  let fixture: ComponentFixture<AdaugaAdreseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaugaAdreseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugaAdreseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
