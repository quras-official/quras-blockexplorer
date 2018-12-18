import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
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
    NgbPaginationModule,
    NodeRoutingModule
  ]
})
export class NodeModule { }
