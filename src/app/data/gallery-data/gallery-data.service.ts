import { GalleryInterface } from './gallery-data.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryDataService {
  gallery: GalleryInterface[] = [
    {
      title: 'Test1',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby.jpg',
      cat: [ 'tree', 'sea' ]
    },
    {
      title: 'Test2',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby2.jpg',
      cat: [ 'moon', 'sea' ]
    },
    {
      title: 'Test3',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby3.jpg',
      cat: [ 'moon', 'mountain' ]
    },
    {
      title: 'Test4',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby4.jpg',
      cat: [ 'tree', 'mountain' ]
    },
    {
      title: 'Test5',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby5.jpg',
      cat: [ 'baby' ]
    },
    {
      title: 'Test6',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby.jpg',
      cat: [ 'tree', 'sea' ]
    },
    {
      title: 'Test7',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby2.jpg',
      cat: [ 'moon', 'sea' ]
    },
    {
      title: 'Test8',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby3.jpg',
      cat: [ 'moon', 'mountain' ]
    },
    {
      title: 'Test9',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby4.jpg',
      cat: [ 'tree', 'mountain' ]
    },
    {
      title: 'Test10',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby5.jpg',
      cat: [ 'baby' ]
    },
    {
      title: 'Test11',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby.jpg',
      cat: [ 'tree', 'sea' ]
    },
    {
      title: 'Test12',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby2.jpg',
      cat: [ 'moon', 'sea' ]
    },
    {
      title: 'Test13',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby3.jpg',
      cat: [ 'moon', 'mountain' ]
    },
    {
      title: 'Test14',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby4.jpg',
      cat: [ 'tree', 'mountain' ]
    },
    {
      title: 'Test15',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby5.jpg',
      cat: [ 'baby' ]
    }
  ];

  constructor() {}

  getGallerys(): GalleryInterface[] {
    return this.gallery.slice();
  }

  getGallery(index: number): GalleryInterface {
    return this.gallery.slice()[index];
  }
}
