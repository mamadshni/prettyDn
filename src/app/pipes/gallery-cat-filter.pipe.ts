import { Pipe, PipeTransform } from '@angular/core';
import { GalleryInterface } from '../data/gallery-data/gallery-data.interface';

@Pipe({
  name: 'galleryCatFilter',
  pure: false
})
export class GalleryCatFilterPipe implements PipeTransform {
  transform(value: GalleryInterface[], textFilter: string): any {
    if (textFilter === '' || textFilter.length === 0) {
      return value;
    }
    const result: GalleryInterface[] = [];

    value.forEach((item: GalleryInterface) => {
      if (item.cat.includes(textFilter.toLowerCase())) {
        result.push(item);
      }
    });

    return result;
  }
}
