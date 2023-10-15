import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCLientComponent } from './view-client.component';

describe('ViewCLientComponent', () => {
  let component: ViewCLientComponent;
  let fixture: ComponentFixture<ViewCLientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCLientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCLientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
