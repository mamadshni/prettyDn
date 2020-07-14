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

  constructor() {}

  ngOnInit() {}
}
