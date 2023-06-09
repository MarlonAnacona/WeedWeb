import { TestBed, async } from '@angular/core/testing';
import { TimeComponent } from './time.component';

describe('TimeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimeComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TimeComponent);
    const time = fixture.componentInstance;
    expect(time).toBeTruthy();
  });

  it(`should have as title 'clima'`, () => {
    const fixture = TestBed.createComponent(TimeComponent);
    const time = fixture.componentInstance;
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TimeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('clima app is running!');
  });
});
