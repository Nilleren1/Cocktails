import { LoadingController } from '@ionic/angular';
import { ApiService } from './../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { IonicSlides } from '@ionic/angular';


@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.page.html',
  styleUrls: ['./cocktails.page.scss'],
})
export class CocktailsPage implements OnInit {

  cocktailData: any; 
  searchTerm: string = ''; 
  searchPerformed = false;

  swiperModules = [IonicSlides];

  popularCocktails = [
    { name: 'Cocktail 1', image: 'https://www.foodandwine.com/thmb/Ua44qSI9Ukdtq4m3y2a7JJRsGk8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Negroni-Sbagliato-3-RECIPE1222-fb705196ed13408a97f4acb7d88f6fc2.jpg' },
    { name: 'Cocktail 2', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/negroni-ca29c0a.jpg' },
    { name: 'Cocktail 3', image: 'https://hips.hearstapps.com/hmg-prod/images/cocktails-1594319263.jpg' },
    // Add more cocktails here
  ];
  
  // Swiper Configuration
swiperConfig: SwiperOptions = {
  slidesPerView: 'auto', // Display as many slides as fit within the container
  spaceBetween: 10,
  autoplay: {
    delay: 2000, // Autoplay delay in milliseconds
  },
  loop: true,
};


  constructor(
    private ApiService: ApiService, 
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
  }

  async clearSearch() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();

    this.searchTerm = '';
    this.cocktailData = null;

    loading.dismiss();
  }

  async searchCocktail() {
    if (!this.searchTerm) {
      this.searchPerformed = false;
      return;
    }
  
    const loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();
  
    this.ApiService.getCocktailByName(this.searchTerm).subscribe(data => {
      this.cocktailData = data;
      this.searchPerformed = true;
      loading.dismiss();
    });
  }
  
  // API returns ingredients as seperate properties therfor this function to loop through them
  getIngredients(cocktail: any) {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      if (cocktail['strIngredient' + i]) {
        ingredients.push(cocktail['strIngredient' + i]);
      }
    }
    return ingredients;
  }

  // API returns measurements as seperate properties therfor this function to loop through them
  getMeasurements(cocktail: any) {
    let measurement = [];
    for (let i = 1; i <= 15; i++) {
      if (cocktail['strMeasure' + i]) {
        measurement.push(cocktail['strMeasure' + i]);
      }
    }
    return measurement;
  }
}
