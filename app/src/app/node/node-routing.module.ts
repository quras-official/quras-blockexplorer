import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodesComponent } from './nodes/nodes.component';
import { NodeComponent } from './node/node.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NodesComponent
  },
  {
    path: ':id',
    component: NodeComponent
  },
  {
    path: ':id/transactions',
    component: NodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NodeRoutingModule { }
