import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulContracteComponent } from './modul-contracte.component';

describe('ModulContracteComponent', () => {
  let component: ModulContracteComponent;
  let fixture: ComponentFixture<ModulContracteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulContracteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulContracteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
