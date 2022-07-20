import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAlertComponent } from './image-alert.component';

describe('ImageAlertComponent', () => {
  let component: ImageAlertComponent;
  let fixture: ComponentFixture<ImageAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
