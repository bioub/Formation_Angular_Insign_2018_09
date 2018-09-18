import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockObservableComponent } from './clock-observable.component';

describe('ClockObservableComponent', () => {
  let component: ClockObservableComponent;
  let fixture: ComponentFixture<ClockObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
