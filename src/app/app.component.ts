import { Component, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnChanges {
  title = 'angular-scroll-animation';
  ngOnChanges() {
    console.log(1);
  }
}
