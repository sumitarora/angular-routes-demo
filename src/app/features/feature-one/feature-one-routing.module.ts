import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureOneHomeComponent } from './components/home.component';
import { FeatureOneOneComponent } from './components/one.component';
import { FeatureOneThreeComponent } from './components/three.component';
import { FeatureOneTwoComponent } from './components/two.component';


const routes: Routes = [{
  path: '', component: FeatureOneHomeComponent
}, {
  path: 'one', component: FeatureOneOneComponent
}, {
  path: 'two', component: FeatureOneTwoComponent
}, {
  path: 'three', component: FeatureOneThreeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureOneRoutingModule { }
