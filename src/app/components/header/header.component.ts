import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navigation: any = [
    {
      title: 'Home', routerLink: '', children: [
        { title: 'Route One', routerLink: '/route-one' },
        { title: 'Route Two', routerLink: '/route-two' },
        { title: 'Route Three', routerLink: '/route-three' },
        {
          title: 'Feature One', routerLink: '/feature-one', children: [
            { title: 'One', routerLink: '/feature-one/one' },
            { title: 'Two', routerLink: '/feature-one/two' },
            { title: 'Three', routerLink: '/feature-one/three' },
          ]
        },
        { title: 'Feature Two', routerLink: '/feature-two' },
        { title: 'Feature Three', routerLink: '/feature-three' },
        {
          title: 'Route with Data', routerLink: '/route-data'
        }, {
          title: 'Route with Params', routerLink: '/route-params/hello'
        }, {
          title: 'Route with Query Params', routerLink: '/route-query-params',
          queryParmas: { "message": "Hello from route param!!" }
        },
      ]
    },
  ];
}
