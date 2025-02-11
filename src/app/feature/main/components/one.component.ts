import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-one',
  template: ` <h1 class="text-4xl text-center">feature one works!</h1> `,
  standalone: false,
})
export class FeatureOneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
