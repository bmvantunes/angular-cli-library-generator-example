import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondTestComponent } from './my-second-test.component';

describe('MySecondTestComponent', () => {
  let component: MySecondTestComponent;
  let fixture: ComponentFixture<MySecondTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySecondTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySecondTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
