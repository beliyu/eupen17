import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import 'turn.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit {
  title = 'app';
qs = [
  {p: 'Text 1', h: '132', i: '/assets/a1.jpg'},
  {p: 'Text 2', h: '465', i: '/assets/a2.jpg'},
  {p: 'Text 3', h: '798', i: '/assets/a4.jpg'},
];


  ngAfterViewInit() {
    $('#magazine').turn({
      gradients: true,
      acceleration: true,
      autoCenter: true
    });
  }
}
