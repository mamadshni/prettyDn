import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullpageService {
  fullpageApi: any;

  constructor() {}

  getLength(): number {
    return this.fullpageApi.test.left.length;
  }

  moveTo(index: number): void {
    this.fullpageApi.moveTo(index);
  }

  moveFirstItem(): void {
    this.moveTo(1);
  }

  moveLastItem(): void {
    this.moveTo(this.getLength());
  }
}
