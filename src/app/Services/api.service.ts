import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = '1'; 

  constructor(private http: HttpClient) { }

  getCocktailByName(cocktailName: string): Observable<any> {
    const url = `https://www.thecocktaildb.com/api/json/v1/${this.apiKey}/search.php?s=${cocktailName}`;
    return this.http.get(url);
  }

}
