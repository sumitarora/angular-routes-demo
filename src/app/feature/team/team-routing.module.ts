import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { FeatureTeamComponent } from './components/team.component';
import {
  canActivateAnotherGuard,
  canActivateChildGuard,
  canActivateTeam,
  canDeactivateMemberAndMatch,
  canDeactivateTeam,
  canMatchTeam,
} from '../../common/guards';
import { FeatureTeamForbiddenComponent } from './components/forbidden.component';
import { FeatureTeamMemberComponent } from './components/member.component';
import { FeatureTeamMatchComponent } from './components/match.component';
import { FeatureTeamAdminComponent } from './components/admin.component';

/**
 * guards
 * CanActivate
 * CanActivateChild
 * CanDeactivate
 * CanMatch
 */

const routes: Routes = [
  {
    path: '',
    component: FeatureTeamComponent,
    canActivateChild: [canActivateChildGuard],
    children: [
      {
        path: 'forbidden',
        component: FeatureTeamForbiddenComponent,
      },
      {
        path: 'member/:teamId',
        component: FeatureTeamMemberComponent,
        canActivate: [canActivateTeam, canActivateAnotherGuard],
        canDeactivate: [canDeactivateMemberAndMatch],
      },
      {
        path: 'match/:teamId',
        component: FeatureTeamMatchComponent,
        canMatch: [canMatchTeam],
        canDeactivate: [canDeactivateMemberAndMatch],
      },
      {
        path: 'admin',
        component: FeatureTeamAdminComponent,
        canDeactivate: [canDeactivateTeam],
      },
    ],
  },
];

@NgModule({
  providers: [provideRouter(routes)],
})
export class TeamRoutingModule {}
