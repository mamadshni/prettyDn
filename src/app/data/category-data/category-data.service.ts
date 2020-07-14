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
      imageUrl: '../assets/baby.jpg',
      detail:
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur aliquid deserunt perspiciatis reiciendis cum repellendus libero culpa mollitia nisi adipisci eius velit dolor nesciunt nihil qui explicabo accusantium ad dolorem dolores, vel similique iure! Illo, animi! Saepe accusantium nulla laboriosam, veritatis, error nihil doloremque eos fuga voluptas atque molestiae culpa'
    },
    {
      title: 'Test2',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby2.jpg',
      detail:
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur aliquid deserunt perspiciatis reiciendis cum repellendus libero culpa mollitia nisi adipisci eius velit dolor nesciunt nihil qui explicabo accusantium ad dolorem dolores, vel similique iure! Illo, animi! Saepe accusantium nulla laboriosam, veritatis, error nihil doloremque eos fuga voluptas atque molestiae culpa'
    },
    {
      title: 'Test3',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby3.jpg',
      detail:
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur aliquid deserunt perspiciatis reiciendis cum repellendus libero culpa mollitia nisi adipisci eius velit dolor nesciunt nihil qui explicabo accusantium ad dolorem dolores, vel similique iure! Illo, animi! Saepe accusantium nulla laboriosam, veritatis, error nihil doloremque eos fuga voluptas atque molestiae culpa'
    },
    {
      title: 'Test4',
      description: 'Lorem ipsum dolor',
      imageUrl: '../assets/baby4.jpg',
      detail:
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur aliquid deserunt perspiciatis reiciendis cum repellendus libero culpa mollitia nisi adipisci eius velit dolor nesciunt nihil qui explicabo accusantium ad dolorem dolores, vel similique iure! Illo, animi! Saepe accusantium nulla laboriosam, veritatis, error nihil doloremque eos fuga voluptas atque molestiae culpa'
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
