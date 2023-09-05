import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaUpdateComponent } from './consulta-update.component';

describe('ConsultaUpdateComponent', () => {
  let component: ConsultaUpdateComponent;
  let fixture: ComponentFixture<ConsultaUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaUpdateComponent]
    });
    fixture = TestBed.createComponent(ConsultaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
