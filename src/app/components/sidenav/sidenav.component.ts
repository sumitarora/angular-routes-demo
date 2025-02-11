import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [RouterModule],
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent {
  routeQueryParmas = { message: 'Hello from route param!!' };
}
