import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blocks', loadChildren: './block/block.module#BlockModule' },
  { path: 'txs', loadChildren: './tx/tx.module#TxModule' },
  { path: 'addresses', loadChildren: './address/address.module#AddressModule' },
  { path: 'nodes', loadChildren: './node/node.module#NodeModule' },
  { path: 'assets', loadChildren: './asset/asset.module#AssetModule' },
  { path: 'status', loadChildren: './status/status.module#StatusModule' },
  { path: 'search', loadChildren: './search/search.module#SearchModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
