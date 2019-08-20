import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalertPage } from './calert.page';

describe('CalertPage', () => {
  let component: CalertPage;
  let fixture: ComponentFixture<CalertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
