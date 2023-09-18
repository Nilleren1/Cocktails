import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CocktailsPageRoutingModule } from './cocktails-routing.module';
import { CocktailsPage } from './cocktails.page';
import { SwiperComponentModule } from '../shared/swiper/swiper.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CocktailsPageRoutingModule,
    SwiperComponentModule
  ],
  declarations: [CocktailsPage]
})
export class CocktailsPageModule {}
