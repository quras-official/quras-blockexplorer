import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ApiRoutingModule } from './api-routing.module';
import { BlockComponent } from './block/block.component';
import { TxComponent } from './tx/tx.component';
import { AssetComponent } from './asset/asset.component';
import { AddressComponent } from './address/address.component';
import { NodeComponent } from './node/node.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    BlockComponent,
    TxComponent,
    AssetComponent,
    AddressComponent,
    NodeComponent,
    StatusComponent,
  ],
  imports: [
    ShareModule,
    ApiRoutingModule,
  ]
})
export class ApiModule { }
