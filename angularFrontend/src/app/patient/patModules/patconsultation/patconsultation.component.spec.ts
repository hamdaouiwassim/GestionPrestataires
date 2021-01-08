import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatconsultationComponent } from './patconsultation.component';

describe('PatconsultationComponent', () => {
  let component: PatconsultationComponent;
  let fixture: ComponentFixture<PatconsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatconsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
