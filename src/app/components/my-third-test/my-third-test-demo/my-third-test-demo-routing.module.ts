import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyThirdTestDemoComponent } from './my-third-test-demo.component';
import { MyThirdTestModule } from '../my-third-test.module';

/* tslint:disable */
const routes: Routes = [
  { path: '', component: MyThirdTestDemoComponent, data: { animation: 'my-third-test' } }
];
/* tslint:enable */


@NgModule({
  imports: [RouterModule.forChild(routes), MyThirdTestModule],
  exports: [RouterModule],
  declarations: [MyThirdTestDemoComponent]
})
export class MyThirdTestDemoRoutingModule { }
