import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  routeData: any;
  routeParams: any;
  queryParams: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeData = this.activatedRoute.snapshot.data;
    this.routeParams = this.activatedRoute.snapshot.params;
    this.queryParams = this.activatedRoute.snapshot.queryParams;
  }

}
