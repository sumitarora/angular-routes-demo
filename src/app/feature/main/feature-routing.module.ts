import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureOneComponent } from './components/one.component';
import { FeatureThreeComponent } from './components/three.component';
import { FeatureTwoComponent } from './components/two.component';
import { FeatureMainComponent } from './components/main.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureMainComponent,
    children: [
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
