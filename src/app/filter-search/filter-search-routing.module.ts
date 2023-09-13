import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterSearchPage } from './filter-search.page';

const routes: Routes = [
  {
    path: '',
    component: FilterSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterSearchPageRoutingModule {}
