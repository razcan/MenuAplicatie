import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaAdresaComponent } from './adauga-adresa.component';

describe('AdaugaAdresaComponent', () => {
  let component: AdaugaAdresaComponent;
  let fixture: ComponentFixture<AdaugaAdresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaugaAdresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugaAdresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
