import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppTitleComponent } from './components/title/title.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidenavComponent, AppTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly router = inject(Router);
  title = 'home works!!!!';

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const parsedUrl = event.url.split('/')[1].split('?')[0];
        const pageTitle = parsedUrl || 'home';
        this.title = pageTitle + ' works !!!';
      }
    });
  }
}
