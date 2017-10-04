import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mc-my-third-test',
  templateUrl: './my-third-test.component.html',
  styleUrls: ['./my-third-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyThirdTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
