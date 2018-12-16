import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressesComponent } from './addresses/addresses.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AddressesComponent
  },
  {
    path: ':id',
    component: AddressComponent
  },
  {
    path: ':id/transactions',
    component: AddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
