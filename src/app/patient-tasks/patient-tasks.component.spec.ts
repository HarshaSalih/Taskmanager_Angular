import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTasksComponent } from './patient-tasks.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PatientTasksComponent', () => {
  let component: PatientTasksComponent;
  let fixture: ComponentFixture<PatientTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientTasksComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
