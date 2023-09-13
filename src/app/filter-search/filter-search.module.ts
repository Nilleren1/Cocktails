import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterSearchPageRoutingModule } from './filter-search-routing.module';

import { FilterSearchPage } from './filter-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterSearchPageRoutingModule
  ],
  declarations: [FilterSearchPage]
})
export class FilterSearchPageModule {}
