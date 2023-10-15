import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GethousesComponent } from './gethouses.component';

describe('GethousesComponent', () => {
  let component: GethousesComponent;
  let fixture: ComponentFixture<GethousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GethousesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GethousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
