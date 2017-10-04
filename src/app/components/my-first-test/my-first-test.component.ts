import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mc-my-first-test',
  templateUrl: './my-first-test.component.html',
  styleUrls: ['./my-first-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyFirstTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
