import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksComponent } from './blocks/blocks.component';
import { BlockComponent } from './block/block.component';
import { BlockRoutingModule } from './block-routing.module';

@NgModule({
  declarations: [
    BlocksComponent,
    BlockComponent,
  ],
  imports: [
    CommonModule,
    BlockRoutingModule
  ]
})
export class BlockModule { }
