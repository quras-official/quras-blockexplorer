import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'ngx-moment';

import { ToKbPipes } from './pipes/tokb.pipes';
import { CutStringPipe } from './pipes/cut.pipes';
import { TranslateModule } from '@ngx-translate/core';
import { SearchComponent } from '../search/search/search.component';

const sharedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgbPaginationModule,
  MomentModule,
  TranslateModule
];

const sharedComponents = [
  SearchComponent
];

const sharedPipes = [
  ToKbPipes,
  CutStringPipe
];

@NgModule({
  declarations: [
    sharedPipes,
    sharedComponents
  ],
  imports: [
    sharedModules
  ],
  exports: [
    sharedModules,
    sharedComponents,
    sharedPipes
  ]
})
export class ShareModule { }
