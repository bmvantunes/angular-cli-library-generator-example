import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstTestComponent } from './my-first-test.component';

describe('MyFirstTestComponent', () => {
  let component: MyFirstTestComponent;
  let fixture: ComponentFixture<MyFirstTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
