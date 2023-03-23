import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFarmComponent } from './create-farm.component';

describe('CreateFarmComponent', () => {
  let component: CreateFarmComponent;
  let fixture: ComponentFixture<CreateFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFarmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
