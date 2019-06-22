import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute, Data, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// tslint:disable:use-host-property-decorator

@Component({
  selector: 'app-background-style',
  templateUrl: './background-style.component.html',
  styleUrls: ['./background-style.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'background'
  }
})
export class BackgroundStyleComponent implements OnInit {
  routeChange = false;
  isLight: boolean;
  @ViewChild('svgWrapper') svgWrapper: ElementRef;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const routeSnapshot = this.route.firstChild.snapshot.data.isLight;
        this.routeChange = !this.routeChange;
        this.isLight = routeSnapshot ? true : false;
        this.cd.detectChanges();
      });
  }
}
