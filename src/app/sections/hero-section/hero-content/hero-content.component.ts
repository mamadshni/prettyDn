import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
