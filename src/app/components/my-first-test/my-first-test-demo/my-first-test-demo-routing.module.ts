import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFirstTestDemoComponent } from './my-first-test-demo.component';
import { MyFirstTestModule } from '../my-first-test.module';

/* tslint:disable */
const routes: Routes = [
  { path: '', component: MyFirstTestDemoComponent, data: { animation: 'my-first-test' } }
];
/* tslint:enable */


@NgModule({
  imports: [RouterModule.forChild(routes), MyFirstTestModule],
  exports: [RouterModule],
  declarations: [MyFirstTestDemoComponent]
})
export class MyFirstTestDemoRoutingModule { }
