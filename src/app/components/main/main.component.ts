import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  title: String = 'User Portal';
  image = 'https://freesvg.org/img/black_orange_men_cloud.png';

  constructor() { }

  // Angular lifecycle hook
  ngOnInit(): void {

  }

}
