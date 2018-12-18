import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { BlocksComponent } from './blocks/blocks.component';
import { BlockComponent } from './block/block.component';
import { BlockRoutingModule } from './block-routing.module';

@NgModule({
  declarations: [
    BlocksComponent,
    BlockComponent
  ],
  imports: [
    ShareModule,
    BlockRoutingModule,
  ]
})
export class BlockModule { }
