import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFourthTestComponent } from './my-fourth-test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyFourthTestComponent],
  exports: [MyFourthTestComponent]
})
export class MyFourthTestModule { }
