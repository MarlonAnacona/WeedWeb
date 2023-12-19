import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrabajaComponent } from './barrabaja.component';

describe('BarrabajaComponent', () => {
  let component: BarrabajaComponent;
  let fixture: ComponentFixture<BarrabajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrabajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrabajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
