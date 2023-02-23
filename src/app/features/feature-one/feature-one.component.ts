import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-one',
  template: `
    <h1>feature one works!</h1>
  `,
})
export class FeatureOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
