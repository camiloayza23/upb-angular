import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    products = [
    {
      description: 'aaaaa',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 12,
      title: 'saltenhas'
    },
    {
      description: 'aaaaa',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 12,
      title: 'saltenhas'
    },
    {
      description: 'aaaaa',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 12,
      title: 'saltenhas'
    },
    {
      description: 'aaaaa',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 12,
      title: 'saltenhas'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}