import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { PermissionsService } from '../../common/services';

@NgModule({
  declarations: [],
  imports: [CommonModule, TeamRoutingModule],
  providers: [PermissionsService],
})
export class TeamModule {}
