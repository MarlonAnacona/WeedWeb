import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubaruserComponent } from './menubaruser.component';

describe('MenubaruserComponent', () => {
  let component: MenubaruserComponent;
  let fixture: ComponentFixture<MenubaruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubaruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubaruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
