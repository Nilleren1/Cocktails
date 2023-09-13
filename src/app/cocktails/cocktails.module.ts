import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocktailsPageRoutingModule } from './cocktails-routing.module';

import { CocktailsPage } from './cocktails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CocktailsPageRoutingModule,
  ],
  declarations: [CocktailsPage]
})
export class CocktailsPageModule {}
