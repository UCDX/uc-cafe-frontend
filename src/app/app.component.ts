import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './modules/servicios';
import { User } from './modules/modelos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    document.onreadystatechange = this.setSidenavPosition
    window.onresize = this.setSidenavPosition
  }

  setSidenavPosition() {
    let toolbar = document.getElementById('toolbar')
    let sidenav = document.getElementById('sidenav')
    sidenav.style.top = `${toolbar.offsetHeight}px`
  }

user: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }

  logout() {
      this.authenticationService.logout();
  }

}
