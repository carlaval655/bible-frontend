import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasListComponent } from './consultas-list.component';

describe('ConsultasListComponent', () => {
  let component: ConsultasListComponent;
  let fixture: ComponentFixture<ConsultasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultasListComponent]
    });
    fixture = TestBed.createComponent(ConsultasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
