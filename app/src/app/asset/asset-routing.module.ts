import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetsComponent } from './assets/assets.component';
import { AssetComponent } from './asset/asset.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AssetsComponent
  },
  {
    path: ':id',
    component: AssetComponent
  },
  {
    path: ':id/transactions',
    component: AssetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
