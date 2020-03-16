/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MuurtafelComponent } from './muurtafel.component';

describe('MuurtafelComponent', () => {
  let component: MuurtafelComponent;
  let fixture: ComponentFixture<MuurtafelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuurtafelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuurtafelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
