import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyThirdTestComponent } from './my-third-test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyThirdTestComponent],
  exports: [MyThirdTestComponent]
})
export class MyThirdTestModule { }
