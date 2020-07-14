import { CrossDataService } from './../../data/cross-data/cross-data.service';
import { GalleryDataService } from './../../data/gallery-data/gallery-data.service';
import { GalleryInterface } from './../../data/gallery-data/gallery-data.interface';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-gallery-wrapper-section',
  templateUrl: './gallery-wrapper-section.component.html',
  styleUrls: [ './gallery-wrapper-section.component.scss' ]
})
export class GalleryWrapperSectionComponent implements OnInit {
  filterCat = '';
  // SearchText = '';
  datas: GalleryInterface[];

  isFilterMenuOpen = false;
  isPreViewGalleryOpen = false;
  // isSearchMenuOpen = false;

  constructor(
    private galleryDataService: GalleryDataService,
    private crossDataService: CrossDataService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.datas = this.galleryDataService.getGallerys();

    this.crossDataService.isFilterMenuOpened.subscribe((val) => {
      this.isFilterMenuOpen = val;
    });

    this.crossDataService.isPreViewGalleryOpened.subscribe((val) => {
      this.isPreViewGalleryOpen = val;
    });

    // this.crossDataService.isSearchMenuOpened.subscribe((val) => {
    //   this.isSearchMenuOpen = val;
    // });
  }

  changeFilterCat(cat: string) {
    this.filterCat = cat;

    // TODO: fix this shit :D

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  // changeSearchCat(text: string) {
  //   this.SearchText = text;

  //   // TODO: fix this shit :D

  //   window.scrollBy(0, 1);
  //   window.scrollBy(0, -1);
  // }
}
