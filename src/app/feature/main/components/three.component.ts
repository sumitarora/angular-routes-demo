import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-three',
  template: ` <h1 class="text-4xl text-center">feature three works!</h1> `,
  standalone: false,
})
export class FeatureThreeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
