import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSearchComponent } from './consulta-search.component';

describe('ConsultaSearchComponent', () => {
  let component: ConsultaSearchComponent;
  let fixture: ComponentFixture<ConsultaSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaSearchComponent]
    });
    fixture = TestBed.createComponent(ConsultaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
