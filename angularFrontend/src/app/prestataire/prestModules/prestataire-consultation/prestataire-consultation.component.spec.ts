import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireConsultationComponent } from './prestataire-consultation.component';

describe('PrestataireConsultationComponent', () => {
  let component: PrestataireConsultationComponent;
  let fixture: ComponentFixture<PrestataireConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestataireConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestataireConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
