import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThirdTestComponent } from './my-third-test.component';

describe('MyThirdTestComponent', () => {
  let component: MyThirdTestComponent;
  let fixture: ComponentFixture<MyThirdTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyThirdTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyThirdTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
