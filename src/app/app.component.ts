import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loading = true;

    constructor(private router: Router) {
    }

    ngOnInit() {
      this.router.events.subscribe(event  => this.loading = event instanceof NavigationStart);
    }

    logout() {
    }
}
