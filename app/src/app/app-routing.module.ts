import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*import { BlocksComponent } from './blocks/blocks.component';
import { TxsComponent } from '../components/txs/txs.component';
import { AddressesComponent } from '../components/addresses/addresses.component';
import { AddressComponent } from '../components/address/address.component';
import { NodesComponent } from '../components/nodes/nodes.component';
import { NodeComponent } from '../components/node/node.component';
import { AssetsComponent } from '../components/assets/assets.component';
import { AssetComponent } from '../components/asset/asset.component';
import { BlockComponent } from '../components/block/block.component';
import { TxComponent } from '../components/tx/tx.component';*/

const routes: Routes = [
  { path: 'blocks', loadChildren: './block/block.module#BlockModule' },
  { path: 'txs', loadChildren: './tx/tx.module#TxModule' },
  { path: 'addresses', loadChildren: './address/address.module#AddressModule' },
  { path: 'nodes', loadChildren: './node/node.module#NodeModule' },
  { path: 'assets', loadChildren: './asset/asset.module#AssetModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
