import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mc-my-second-test',
  templateUrl: './my-second-test.component.html',
  styleUrls: ['./my-second-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MySecondTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
