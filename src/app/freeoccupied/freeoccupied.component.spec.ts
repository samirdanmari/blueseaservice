import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeoccupiedComponent } from './freeoccupied.component';

describe('FreeoccupiedComponent', () => {
  let component: FreeoccupiedComponent;
  let fixture: ComponentFixture<FreeoccupiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeoccupiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeoccupiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
