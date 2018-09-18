import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFirstNameComponent } from './hello-first-name.component';

describe('HelloFirstNameComponent', () => {
  let component: HelloFirstNameComponent;
  let fixture: ComponentFixture<HelloFirstNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloFirstNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloFirstNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
