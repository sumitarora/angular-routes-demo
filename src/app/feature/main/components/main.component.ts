import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feature-home',
  template: `
    <h1 class="text-6xl text-center">feature main works!</h1>
    <router-outlet></router-outlet>
  `,
  imports: [RouterModule],
  standalone: true,
})
export class FeatureMainComponent {}
