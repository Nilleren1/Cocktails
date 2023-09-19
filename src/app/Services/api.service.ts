import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiKey = '1';

  constructor(private http: HttpClient) {}

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

  getCocktailByName(cocktailName: string): Observable<any> {
    const url = `https://www.thecocktaildb.com/api/json/v1/${this.apiKey}/search.php?s=${cocktailName}`;
    return this.http.get(url);
  }
}
