import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsandlanguagesComponent } from './skillsandlanguages.component';

describe('SkillsandlanguagesComponent', () => {
  let component: SkillsandlanguagesComponent;
  let fixture: ComponentFixture<SkillsandlanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsandlanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsandlanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
