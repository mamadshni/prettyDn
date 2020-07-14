import { fadeGalleryFilter } from './gallery-filter.animation';
import { CrossDataService } from './../../../data/cross-data/cross-data.service';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'app-gallery-filter',
  templateUrl: './gallery-filter.component.html',
  styleUrls: [ './gallery-filter.component.scss' ],
  animations: [ fadeGalleryFilter ]
})
export class GalleryFilterComponent implements OnInit {
  @HostBinding('@fadeFilter') val = 'in';

  @Output() catValue = new EventEmitter();
  selectedCat = '';
  constructor(private crossDataService: CrossDataService) {}

  ngOnInit() {}

  selectCat(cat: string) {
    this.selectedCat = cat;
    this.catValue.emit(cat);
  }

  close() {
    this.crossDataService.isFilterMenuOpened.next(false);
  }
}
