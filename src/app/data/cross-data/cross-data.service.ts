import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrossDataService {
  isFilterMenuOpened = new BehaviorSubject<boolean>(false);

  constructor() {}
}
