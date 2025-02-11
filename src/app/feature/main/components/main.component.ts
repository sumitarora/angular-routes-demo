import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feature-home',
  template: `
    <div
      class="flex flex-col items-center border-2 border-dashed border-gray-600 p-2"
    >
      <h1 class="text-4xl text-center py-8 border-b-2 w-full border-gray-300">
        feature main works!
      </h1>
      <div class="py-8">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  imports: [RouterModule],
  standalone: true,
})
export class FeatureMainComponent {}
