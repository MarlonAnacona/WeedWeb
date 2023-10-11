import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreemiumComponent } from './freemium.component';

describe('FreemiumComponent', () => {
  let component: FreemiumComponent;
  let fixture: ComponentFixture<FreemiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreemiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreemiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
