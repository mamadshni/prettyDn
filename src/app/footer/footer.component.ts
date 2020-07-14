import { CrossDataService } from './../data/cross-data/cross-data.service';
import { FullpageService } from './../sections/category-section/fullpage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PathLocationStrategy } from '@angular/common';

// tslint:disable:use-host-property-decorator

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ],
  host: {
    class: 'footer__wrapper'
  }
})
export class FooterComponent implements OnInit {
  activedPath: string;

  isFilterMenuOpen = false;
  // isSearchMenuOpen = false;

  constructor(
    private fullpageService: FullpageService,
    private route: ActivatedRoute,
    private router: Router,
    private crossDataService: CrossDataService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activedPath = this.route.firstChild.snapshot.url[0].path;
        console.log(this.activedPath);
      });

    this.crossDataService.isFilterMenuOpened.subscribe(
      (val) => (this.isFilterMenuOpen = val)
    );
  }

  toFirstItem() {
    this.fullpageService.moveFirstItem();
  }

  toLastItem() {
    this.fullpageService.moveLastItem();
  }

  triggerFilterMenu() {
    this.isFilterMenuOpen = !this.isFilterMenuOpen;
    this.crossDataService.isFilterMenuOpened.next(this.isFilterMenuOpen);
  }
  // triggerSearchMenu() {
  //   this.isFilterMenuOpen = !this.isFilterMenuOpen;
  //   this.crossDataService.isSearchMenuOpened.next(this.isSearchMenuOpen);
  // }

  goTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
