import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ActivatedRoute, Data, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// tslint:disable:use-host-property-decorator

@Component({
  selector: 'app-background-style',
  templateUrl: './background-style.component.html',
  styleUrls: ['./background-style.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'background'
  }
})
export class BackgroundStyleComponent implements OnInit {
  isLight: boolean;
  @ViewChild('svgWrapper') svgWrapper: ElementRef;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const routeSnapshot = this.route.firstChild.snapshot.data.isLight;
        this.isLight = routeSnapshot ? true : false;
      });
  }
}
