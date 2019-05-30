import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Input() isLight: boolean;

  isMenuOpened = false;
  constructor() {}

  ngOnInit() {}
  changeMenuState() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  closeMenu() {
    this.isMenuOpened = false;
  }
}
