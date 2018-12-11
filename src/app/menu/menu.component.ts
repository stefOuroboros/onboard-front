import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
  <div *ngIf= "(role == null)">
    <nav>
      <ul>
        <li><a href = "">Mon menu</a></li>
      </ul>
    </nav>
  </div>
  `,
  styles: []
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
