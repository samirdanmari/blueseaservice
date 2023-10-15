import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupiedComponent } from './occupied.component';

describe('OccupiedComponent', () => {
  let component: OccupiedComponent;
  let fixture: ComponentFixture<OccupiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccupiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
