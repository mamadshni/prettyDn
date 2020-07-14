import { GalleryInterface } from '../data/gallery-data/gallery-data.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gallerySearchFilter'
})
export class GallerySearchFilterPipe implements PipeTransform {
  transform(
    value: GalleryInterface[],
    textFilter: string,
    target: string
  ): any {
    if (textFilter === '' || textFilter.length === 0) {
      return value;
    }
    const result: GalleryInterface[] = [];

    value.forEach((item: GalleryInterface) => {
      if (item[target].toLowerCase().includes(textFilter.toLowerCase())) {
        result.push(item);
      }
    });

    return result;
  }
}
