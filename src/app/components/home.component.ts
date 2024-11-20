import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 class="text-6xl text-center pb-4">{{ title }}</h1>
    <div class="flex items-center border-2 border-dashed border-gray-600 p-2">
      <h1>Route Data:&nbsp;&nbsp;</h1>
      <pre class="p-2 bg-gray-100">{{ routeData | json }}</pre>
    </div>
    <br />
    <div class="flex items-center border-2 border-dashed border-gray-600 p-2">
      <h1>Route Params:&nbsp;&nbsp;</h1>
      <pre class="p-2 bg-gray-100">{{ routeParams | json }}</pre>
    </div>
    <br />
    <div
      class="flex items-center border-2 border-dashed border-gray-600
      p-2"
    >
      <h1>Query Params:&nbsp;&nbsp;</h1>
      <pre class="p-2 bg-gray-100">{{ queryParams | json }}</pre>
    </div>`,
})
export class HomeComponent implements OnInit {
  routeData: any;
  routeParams: any;
  queryParams: any;
  title = 'home works!!!!';

  routeQueryParmas = { message: 'Hello from route param!!' };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const pageTitle =
      this.activatedRoute.snapshot.routeConfig?.path?.toString() || 'home';
    this.title = pageTitle + ' works!!!';
    this.routeData = this.activatedRoute.snapshot.data;
    this.routeParams = this.activatedRoute.snapshot.params;
    this.queryParams = this.activatedRoute.snapshot.queryParams;
  }
}
