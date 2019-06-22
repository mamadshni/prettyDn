import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Input() isLight: boolean;

  @Input('routeChange') set routeChange(x: boolean) {
    if (this.isMenuOpened) {
      this.closeMenu();
    }
  }

  isMenuOpened = false;

  constructor() {}

  ngOnInit() {}
  changeMenuState() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  closeMenu() {
    this.isMenuOpened = false;
  }
  test() {
    console.log(1);
  }
}
