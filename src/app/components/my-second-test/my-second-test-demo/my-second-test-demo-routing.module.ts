import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MySecondTestDemoComponent } from './my-second-test-demo.component';
import { MySecondTestModule } from '../my-second-test.module';

/* tslint:disable */
const routes: Routes = [
  { path: '', component: MySecondTestDemoComponent, data: { animation: 'my-second-test' } }
];
/* tslint:enable */


@NgModule({
  imports: [RouterModule.forChild(routes), MySecondTestModule],
  exports: [RouterModule],
  declarations: [MySecondTestDemoComponent]
})
export class MySecondTestDemoRoutingModule { }
