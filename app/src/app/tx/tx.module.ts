import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxRoutingModule } from './tx-routing.module';
import { TxsComponent } from './txs/txs.component';
import { TxComponent } from './tx/tx.component';

@NgModule({
  declarations: [
    TxsComponent,
    TxComponent
  ],
  imports: [
    CommonModule,
    TxRoutingModule
  ]
})
export class TxModule { }
