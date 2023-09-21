import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  { path: 'cocktails', loadChildren: () => import('../cocktails/cocktails.module').then(m => m.CocktailsPageModule) },
  { path: 'filter-search', loadChildren: () => import('../filter-search/filter-search.module').then(m => m.FilterSearchPageModule) },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
