import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockComponent } from './block/block.component';
import { TxComponent } from './tx/tx.component';
import { AddressComponent } from './address/address.component';
import { AssetComponent } from './asset/asset.component';
import { NodeComponent } from './node/node.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BlockComponent
  },
  {
    path: 'tx',
    component: TxComponent
  },
  {
    path: 'address',
    component: AddressComponent
  },
  {
    path: 'asset',
    component: AssetComponent
  },
  {
    path: 'node',
    component: NodeComponent
  },
  {
    path: 'status',
    component: StatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiRoutingModule { }
