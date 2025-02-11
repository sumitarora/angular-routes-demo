import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-feature-team',
  template: `
    <div
      class="flex flex-col items-center border-2 border-dashed border-gray-600 p-2"
    >
      <h1 class="text-4xl text-center py-8 border-b-2 w-full border-gray-300">
        feature team works!
      </h1>
      <div class="py-8">
        <div
          class="flex items-center border-2 border-dashed border-gray-600 p-4 mb-6"
        >
          <h1>Route Params:&nbsp;&nbsp;</h1>
          <pre class="p-4 bg-white rounded-sm shadow-md">{{
            routeParams | json
          }}</pre>
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  imports: [CommonModule, RouterModule],
  standalone: true,
})
export class FeatureTeamComponent implements OnInit {
  protected activatedRoute = inject(ActivatedRoute);
  routeParams: any;

  ngOnInit(): void {
    this.routeParams = this.activatedRoute.snapshot.params;
  }
}
