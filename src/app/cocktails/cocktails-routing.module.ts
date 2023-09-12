import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocktailsPage } from './cocktails.page';

const routes: Routes = [
  {
    path: '',
    component: CocktailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocktailsPageRoutingModule {}
