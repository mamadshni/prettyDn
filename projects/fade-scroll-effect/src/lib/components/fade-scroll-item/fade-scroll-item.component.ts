import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterContentInit
} from '@angular/core';
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator

@Component({
  selector: 'fade-scroll-item',
  templateUrl: './fade-scroll-item.component.html',
  styleUrls: ['./fade-scroll-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'fade-scroll__item'
  }
})
export class FadeScrollItemComponent implements OnInit {
  constructor(public elem: ElementRef) {}

  ngOnInit() {}
}
