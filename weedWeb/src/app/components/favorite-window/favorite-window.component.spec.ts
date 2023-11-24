import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteWindowComponent } from './favorite-window.component';

describe('FavoriteWindowComponent', () => {
  let component: FavoriteWindowComponent;
  let fixture: ComponentFixture<FavoriteWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
