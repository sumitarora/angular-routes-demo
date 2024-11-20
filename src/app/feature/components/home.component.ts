import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-home',
    template: ` <h1 class="text-6xl text-center">feature home works!</h1> `,
    standalone: false
})
export class FeatureHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
