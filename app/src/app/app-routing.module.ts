import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status/status.component';
import { StatusModule } from './status/status.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blocks', loadChildren: './block/block.module#BlockModule' },
  { path: 'txs', loadChildren: './tx/tx.module#TxModule' },
  { path: 'addresses', loadChildren: './address/address.module#AddressModule' },
  { path: 'nodes', loadChildren: './node/node.module#NodeModule' },
  { path: 'assets', loadChildren: './asset/asset.module#AssetModule' },
  { path: 'status', component: StatusComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StatusModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
