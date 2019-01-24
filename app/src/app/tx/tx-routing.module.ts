import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TxsComponent } from './txs/txs.component';
import { TxComponent } from './tx/tx.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TxsComponent
  },
  {
    path: ':id',
    component: TxComponent
  },
  {
    path: ':id/transactions',
    component: TxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TxRoutingModule { }
