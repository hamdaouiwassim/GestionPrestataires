import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresthomeComponent } from './presthome.component';

describe('PresthomeComponent', () => {
  let component: PresthomeComponent;
  let fixture: ComponentFixture<PresthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
