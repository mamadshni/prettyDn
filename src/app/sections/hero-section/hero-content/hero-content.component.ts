import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: [ './hero-content.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroContentComponent implements OnInit {
  @Input() detail: string;

  constructor() {}

  ngOnInit() {}
}
