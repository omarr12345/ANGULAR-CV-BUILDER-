import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCVComponent } from './final-cv.component';

describe('FinalCVComponent', () => {
  let component: FinalCVComponent;
  let fixture: ComponentFixture<FinalCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
