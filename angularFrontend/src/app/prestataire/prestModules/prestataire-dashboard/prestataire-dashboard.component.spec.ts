import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireDashboardComponent } from './prestataire-dashboard.component';

describe('PrestataireDashboardComponent', () => {
  let component: PrestataireDashboardComponent;
  let fixture: ComponentFixture<PrestataireDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestataireDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestataireDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
