import { Component, OnInit } from '@angular/core';
import { CategoryInterface } from 'src/app/data/category-data/category-data.interface';
import { ActivatedRoute } from '@angular/router';
import { CategoryDataService } from 'src/app/data/category-data/category-data.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: [ './about-section.component.scss' ]
})
export class AboutSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
