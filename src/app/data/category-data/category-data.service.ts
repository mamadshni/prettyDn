import { CategoryInterface } from './category-data.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {
  categories: CategoryInterface[] = [
    {
      title: 'Test1',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby.jpg'
    },
    {
      title: 'Test2',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby2.jpg'
    },
    {
      title: 'Test3',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby3.jpg'
    },
    {
      title: 'Test4',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby4.jpg'
    },
    {
      title: 'Test5',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby5.jpg'
    }
  ];

  constructor() {}

  getCategories(): CategoryInterface[] {
    return this.categories.slice();
  }

  getCategory(index: number): CategoryInterface {
    return this.categories.slice()[index];
  }
}
