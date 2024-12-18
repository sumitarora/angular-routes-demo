import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { FeatureTeamComponent } from './components/team.component';
import { canActivateTeam, canMatchTeam } from '../../common/guards';
import { FeatureTeamForbiddenComponent } from './components/forbidden.component';
import { FeatureTeamMemberComponent } from './components/member.component';
import { FeatureTeamMatchComponent } from './components/match.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureTeamComponent,
    children: [
      {
        path: 'forbidden',
        component: FeatureTeamForbiddenComponent,
      },
      {
        path: 'member/:teamId',
        component: FeatureTeamMemberComponent,
        canActivate: [canActivateTeam],
      },
      {
        path: 'match/:teamId',
        component: FeatureTeamMatchComponent,
        canMatch: [canMatchTeam],
      },
    ],
  },
];

@NgModule({
  providers: [provideRouter(routes)],
})
export class TeamRoutingModule {}
