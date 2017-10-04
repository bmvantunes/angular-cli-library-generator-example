import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstTestComponent } from './my-first-test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyFirstTestComponent],
  exports: [MyFirstTestComponent]
})
export class MyFirstTestModule { }
