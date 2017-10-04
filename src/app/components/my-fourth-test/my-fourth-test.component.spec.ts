import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFourthTestComponent } from './my-fourth-test.component';

describe('MyFourthTestComponent', () => {
  let component: MyFourthTestComponent;
  let fixture: ComponentFixture<MyFourthTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFourthTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFourthTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
