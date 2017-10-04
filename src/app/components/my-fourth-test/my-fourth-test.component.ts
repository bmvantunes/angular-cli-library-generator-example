import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mc-my-fourth-test',
  templateUrl: './my-fourth-test.component.html',
  styleUrls: ['./my-fourth-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyFourthTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
