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
  searchPerformed = false;

  constructor(
    private ApiService: ApiService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
  }

  async clearSearch() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
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
      message: 'Loading...',
    });
    await loading.present();

    this.ApiService.getCocktailByName(this.searchTerm).subscribe((data) => {
      this.cocktailData = data;
      this.searchPerformed = true;
      loading.dismiss();
    });
  }

  getIngredients(cocktail: any) {
    return this.ApiService.getIngredients(cocktail);
  }

  getMeasurements(cocktail: any) {
    return this.ApiService.getMeasurements(cocktail);
  }
}
