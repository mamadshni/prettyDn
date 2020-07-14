import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrossDataService {
  isFilterMenuOpened = new BehaviorSubject<boolean>(false);
  isPreViewGalleryOpened = new BehaviorSubject<boolean>(false);
  indexPreviewGallery: number;
  // isSearchMenuOpened = new BehaviorSubject<boolean>(false);

  constructor() {}
}
