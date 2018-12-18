import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'ngx-moment';

import { ToKbPipes } from './pipes/tokb.pipes';
import { CutStringPipe } from './pipes/cut.pipes';

const sharedModules = [
  CommonModule,
  NgbPaginationModule,
  MomentModule
];

const sharedComponents = [
];

const sharedPipes = [
  ToKbPipes,
  CutStringPipe
];

@NgModule({
  declarations: [
    sharedPipes
  ],
  imports: [
    sharedModules
  ],
  exports: [
    sharedModules,
    sharedPipes
  ]
})
export class ShareModule { }
