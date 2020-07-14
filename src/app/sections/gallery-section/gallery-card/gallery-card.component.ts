import { GalleryDataService } from './../../../data/gallery-data/gallery-data.service';
import { CrossDataService } from './../../../data/cross-data/cross-data.service';
import { GalleryInterface } from './../../../data/gallery-data/gallery-data.interface';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: [ './gallery-card.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryCardComponent implements OnInit {
  @Input() gallery: GalleryInterface;

  constructor(
    private crossDataService: CrossDataService,
    private galleryDataService: GalleryDataService
  ) {}

  ngOnInit() {}

  preViewPic() {
    this.crossDataService.isPreViewGalleryOpened.next(true);
    const itemIndex = this.galleryDataService.findGalleryIndex(this.gallery);
    this.crossDataService.indexPreviewGallery = itemIndex;
  }
}
