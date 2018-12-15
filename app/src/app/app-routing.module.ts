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
  { path: 'blocks', loadChildren: './block/block.module#BlockModule' }/*,
  { path: 'block/:id', component: BlockComponent },
  { path: 'txs', component: TxsComponent},
  { path: 'tx/:id', component: TxComponent },
  { path: 'addresses', component: AddressesComponent },
  { path: 'address/:id', component: AddressComponent },
  { path: 'nodes', component: NodesComponent },
  { path: 'node/:id', component: NodeComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'asset/:id', component: AssetComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
