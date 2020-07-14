import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FadeScrollEffectService {
  scrollPos = new Subject<[number, number]>();
  constructor() {}
}
