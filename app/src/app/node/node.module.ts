import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { NodesComponent } from './nodes/nodes.component';
import { NodeComponent } from './node/node.component';
import { NodeRoutingModule } from './node-routing.module';

@NgModule({
  declarations: [
    NodesComponent,
    NodeComponent
  ],
  imports: [
    ShareModule,
    NodeRoutingModule
  ]
})
export class NodeModule { }
