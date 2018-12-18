import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { TxRoutingModule } from './tx-routing.module';
import { TxsComponent } from './txs/txs.component';
import { TxComponent } from './tx/tx.component';

@NgModule({
  declarations: [
    TxsComponent,
    TxComponent
  ],
  imports: [
    ShareModule,
    TxRoutingModule
  ]
})
export class TxModule { }
