import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-two',
  template: ` <h1 class="text-4xl text-center">feature two works!</h1> `,
  standalone: false,
})
export class FeatureTwoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
