import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatregisterComponent } from './patregister.component';

describe('PatregisterComponent', () => {
  let component: PatregisterComponent;
  let fixture: ComponentFixture<PatregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
