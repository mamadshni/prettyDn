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
  filterText = '';
  datas: GalleryInterface[];
  isFilterMenuOpen = false;
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
  }

  changeFilterCat(cat: string) {
    this.filterCat = cat;

    // TODO: fix this shit :D

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }
}
