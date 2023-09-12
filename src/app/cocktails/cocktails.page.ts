import { LoadingController } from '@ionic/angular';
import { ApiService } from './../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.page.html',
  styleUrls: ['./cocktails.page.scss'],
})
export class CocktailsPage implements OnInit {

  cocktailData: any; 
  searchTerm: string = ''; 

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
    const loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();

    this.ApiService.getCocktailByName(this.searchTerm).subscribe(data => {
      this.cocktailData = data;
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
}
