import { fadeShowGallery, imageChangeGallery } from './gallery-show.animation';
import { GalleryDataService } from './../../../data/gallery-data/gallery-data.service';
import { GalleryInterface } from './../../../data/gallery-data/gallery-data.interface';
import { CrossDataService } from './../../../data/cross-data/cross-data.service';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-gallery-show',
  templateUrl: './gallery-show.component.html',
  styleUrls: [ './gallery-show.component.scss' ],
  animations: [ fadeShowGallery, imageChangeGallery ]
})
export class GalleryShowComponent implements OnInit {
  @HostBinding('@fadeFilter') val = 'in';
  index = 0;
  gallery: GalleryInterface;
  isLandscape: boolean;

  constructor(
    private crossDataService: CrossDataService,
    private galleryDataService: GalleryDataService
  ) {}

  ngOnInit() {
    this.index = this.crossDataService.indexPreviewGallery;
    this.prepareGallery();
  }

  close() {
    this.crossDataService.isPreViewGalleryOpened.next(false);
  }

  next() {
    this.index = this.galleryDataService.getNextIndex(true, this.index);
    this.prepareGallery();
  }

  prev() {
    this.index = this.galleryDataService.getNextIndex(false, this.index);
    this.prepareGallery();
  }

  prepareGallery() {
    this.gallery = this.galleryDataService.getGallery(this.index);
  }
}
