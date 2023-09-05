import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDeleteComponent } from './consulta-delete.component';

describe('ConsultaDeleteComponent', () => {
  let component: ConsultaDeleteComponent;
  let fixture: ComponentFixture<ConsultaDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaDeleteComponent]
    });
    fixture = TestBed.createComponent(ConsultaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
