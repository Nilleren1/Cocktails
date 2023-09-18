import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements OnInit {
  swiperModules = [IonicSlides];

  //Static contnet for now
  popularCocktails = [
    {
      name: 'Cocktail 1',
      image:
        'https://www.foodandwine.com/thmb/Ua44qSI9Ukdtq4m3y2a7JJRsGk8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Negroni-Sbagliato-3-RECIPE1222-fb705196ed13408a97f4acb7d88f6fc2.jpg',
    },
    {
      name: 'Cocktail 2',
      image:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/negroni-ca29c0a.jpg',
    },
    {
      name: 'Cocktail 3',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/cocktails-1594319263.jpg',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
