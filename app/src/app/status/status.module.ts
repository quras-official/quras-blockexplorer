import { NgModule } from '@angular/core';
import { StatusComponent } from './status/status.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    ShareModule
  ]
})
export class StatusModule { }
