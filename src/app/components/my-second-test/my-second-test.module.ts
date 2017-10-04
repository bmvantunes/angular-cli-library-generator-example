import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySecondTestComponent } from './my-second-test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MySecondTestComponent],
  exports: [MySecondTestComponent]
})
export class MySecondTestModule { }
