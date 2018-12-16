import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodesComponent } from './nodes/nodes.component';
import { NodeComponent } from './node/node.component';
import { NodeRoutingModule } from './node-routing.module';

@NgModule({
  declarations: [
    NodesComponent,
    NodeComponent
  ],
  imports: [
    CommonModule,
    NodeRoutingModule
  ]
})
export class NodeModule { }
