import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RouteOneComponent } from './components/route-one/route-one.component';
import { RouteThreeComponent } from './components/route-three/route-three.component';
import { RouteTwoComponent } from './components/route-two/route-two.component';
import ComponentAux from './components/aux.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'component-aux', component: ComponentAux, outlet: 'sidebar' },
  { path: 'route-one', component: RouteOneComponent },
  { path: 'route-two', component: RouteTwoComponent },
  { path: 'route-three', component: RouteThreeComponent },
  { path: 'route-params/:id', component: HomeComponent },
  { path: 'route-query-params', component: HomeComponent },
  {
    path: 'route-data', component: HomeComponent, data: {
      message: 'Hello from route!!'
    }
  },
  {
    path: 'feature-one',
    loadChildren: () => import('./features/feature-one/feature-one.module').then(m => m.FeatureOneModule)
  },
  {
    path: 'feature-two',
    loadChildren: () => import('./features/feature-two/feature-two.module').then(m => m.FeatureTwoModule)
  },
  {
    path: 'feature-three',
    loadChildren: () => import('./features/feature-three/feature-three.module').then(m => m.FeatureThreeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
