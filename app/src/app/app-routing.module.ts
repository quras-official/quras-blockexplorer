import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search/search.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ApiHeaderComponent } from './api-header/api-header.component';
import { HomeHeaderComponent } from './home-header/home-header.component';

const routes: Routes = [
  //Home page 
  {
    path: '', 
    component: HomeHeaderComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'}
    ]
  },

  { //Main menu items
    path: '', 
    component: AppHeaderComponent,
    children: [
      { path: 'blocks', loadChildren: './block/block.module#BlockModule' },
      { path: 'txs', loadChildren: './tx/tx.module#TxModule' },
      { path: 'addresses', loadChildren: './address/address.module#AddressModule' },
      { path: 'nodes', loadChildren: './node/node.module#NodeModule' },
      { path: 'assets', loadChildren: './asset/asset.module#AssetModule' },
      { path: 'status', loadChildren: './status/status.module#StatusModule' },
      { path: 'search', component: SearchComponent }
    ]
  },

  { //API page 
    path: '', 
    component: ApiHeaderComponent,
    children: [
      { path: 'api', loadChildren: './api/api.module#ApiModule' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash:true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
