import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EVProject';
  hideNavbar: boolean = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.hideNavbar = event.url === '/login';
      }
    });
  }
}
