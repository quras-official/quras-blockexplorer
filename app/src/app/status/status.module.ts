import { NgModule } from '@angular/core';
import { StatusComponent } from './status/status.component';
import { ShareModule } from '../share/share.module';
import { StatusRoutingModule } from './status-routing.module';

@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    ShareModule,
    StatusRoutingModule
  ]
})
export class StatusModule { }
