import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RouteOneComponent } from './components/route-one/route-one.component';
import { RouteThreeComponent } from './components/route-three/route-three.component';
import { RouteTwoComponent } from './components/route-two/route-two.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'route-one', component: RouteOneComponent },
  { path: 'route-two', component: RouteTwoComponent },
  { path: 'route-three', component: RouteThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
