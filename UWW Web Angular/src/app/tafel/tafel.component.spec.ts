/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TafelComponent } from './tafel.component';

describe('TafelComponent', () => {
  let component: TafelComponent;
  let fixture: ComponentFixture<TafelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TafelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
