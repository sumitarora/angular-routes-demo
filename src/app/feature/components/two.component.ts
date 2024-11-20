import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-two',
  template: ` <h1 class="text-6xl text-center">feature two works!</h1> `,
})
export class FeatureTwoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
