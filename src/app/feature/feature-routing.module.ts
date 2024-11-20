import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureHomeComponent } from './components/home.component';
import { FeatureOneComponent } from './components/one.component';
import { FeatureThreeComponent } from './components/three.component';
import { FeatureTwoComponent } from './components/two.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureHomeComponent,
  },
  {
    path: 'one',
    component: FeatureOneComponent,
  },
  {
    path: 'two',
    component: FeatureTwoComponent,
  },
  {
    path: 'three',
    component: FeatureThreeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
