import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
num:Number;
  constructor() { }

  ngOnInit(): void {
    this.num = 100;
  }

}
