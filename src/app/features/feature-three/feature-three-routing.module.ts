import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureThreeComponent } from './feature-three.component';

const routes: Routes = [
  { path: '', component: FeatureThreeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureThreeRoutingModule { }
