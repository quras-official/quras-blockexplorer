import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlocksComponent } from '../components/blocks/blocks.component';
import { BlockComponent } from '../components/block/block.component';
import { TxsComponent } from '../components/txs/txs.component';
import { AddressesComponent } from '../components/addresses/addresses.component';
import { AddressComponent } from '../components/address/address.component';
import { NodesComponent } from '../components/nodes/nodes.component';
import { NodeComponent } from '../components/node/node.component';
import { AssetsComponent } from '../components/assets/assets.component';
import { AssetComponent } from '../components/asset/asset.component';
import { TxComponent } from '../components/tx/tx.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    BlockComponent,
    TxsComponent,
    TxComponent,
    AddressesComponent,
    AddressComponent,
    NodesComponent,
    NodeComponent,
    AssetsComponent,
    AssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
