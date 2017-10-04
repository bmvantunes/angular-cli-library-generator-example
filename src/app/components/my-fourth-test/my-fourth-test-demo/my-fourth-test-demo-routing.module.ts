import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFourthTestDemoComponent } from './my-fourth-test-demo.component';
import { MyFourthTestModule } from '../my-fourth-test.module';

/* tslint:disable */
const routes: Routes = [
  { path: '', component: MyFourthTestDemoComponent, data: { animation: 'my-fourth-test' } }
];
/* tslint:enable */


@NgModule({
  imports: [RouterModule.forChild(routes), MyFourthTestModule],
  exports: [RouterModule],
  declarations: [MyFourthTestDemoComponent]
})
export class MyFourthTestDemoRoutingModule { }
