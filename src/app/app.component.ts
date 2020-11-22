import { Component, OnInit } from '@angular/core';

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
}
