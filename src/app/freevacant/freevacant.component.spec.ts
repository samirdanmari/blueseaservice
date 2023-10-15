import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreevacantComponent } from './freevacant.component';

describe('FreevacantComponent', () => {
  let component: FreevacantComponent;
  let fixture: ComponentFixture<FreevacantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreevacantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreevacantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
