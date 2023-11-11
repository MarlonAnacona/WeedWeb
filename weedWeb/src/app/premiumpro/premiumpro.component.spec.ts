import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumproComponent } from './premiumpro.component';

describe('PremiumproComponent', () => {
  let component: PremiumproComponent;
  let fixture: ComponentFixture<PremiumproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
