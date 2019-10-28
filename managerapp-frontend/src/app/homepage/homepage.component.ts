import { Component, OnInit } from '@angular/core';
import { Test } from '../test';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  test: Test = {
  id: 1,
  name: 'Windstorm 1.0'
 }

  constructor() {}

  ngOnInit() {
  }

}
