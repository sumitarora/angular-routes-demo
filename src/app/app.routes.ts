import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { Service1, Service2, Service3, Service4 } from './common/services';
import { activateGuard } from './common/guards';
import RoutesAuxComponent from './components/aux-route.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'route-one', component: HomeComponent },
  {
    path: 'route-two',
    component: HomeComponent,
    providers: [Service1, Service2, Service3, Service4],
  },
  {
    path: 'route-three',
    component: HomeComponent,
    providers: [Service3, Service4],
  },
  {
    path: 'route-guard',
    component: HomeComponent,
    canActivate: [activateGuard],
  },
  { path: 'component-aux', component: RoutesAuxComponent, outlet: 'sidebar' },
  {
    path: 'route-params/:id',
    component: HomeComponent,
    title: 'Route Parmas',
  },
  { path: 'route-query-params', component: HomeComponent },

  {
    path: 'route-data',
    component: HomeComponent,
    data: {
      message: 'Hello from route!!',
    },
  },
  {
    path: 'route-stand-alone',
    providers: [Service1, Service2, Service3, Service4],
    loadComponent: () =>
      import('./components/standalone-route.component').then(
        (x) => x.RoutesStandaloneComponent
      ),
  },
  {
    path: 'feature/main',
    loadChildren: () =>
      import('./feature/main/feature.module').then((m) => m.FeatureModule),
  },
  {
    path: 'feature/team',
    loadChildren: () =>
      import('./feature/team/team.module').then((m) => m.TeamModule),
  },
];
