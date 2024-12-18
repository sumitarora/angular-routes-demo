import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-feature-team',
  template: `
    <h1 class="text-6xl text-center pb-12">feature team works!</h1>
    <div
      class="flex items-center border-2 border-dashed border-gray-600 p-2 mb-6"
    >
      <h1>Route Params:&nbsp;&nbsp;</h1>
      <pre class="p-2 bg-gray-100">{{ routeParams | json }}</pre>
    </div>
    <router-outlet></router-outlet>
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
