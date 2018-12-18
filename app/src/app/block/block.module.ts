import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksComponent } from './blocks/blocks.component';
import { BlockComponent } from './block/block.component';
import { BlockRoutingModule } from './block-routing.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BlocksComponent,
    BlockComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    BlockRoutingModule
  ]
})
export class BlockModule { }
