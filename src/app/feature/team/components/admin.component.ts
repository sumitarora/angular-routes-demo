import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-team-admin',
  template: `
    <h1 class="text-6xl text-center pb-12">feature team admin works!</h1>
  `,
  standalone: true,
})
export class FeatureTeamAdminComponent {
  public canDeactivate() {
    return false;
  }
}
