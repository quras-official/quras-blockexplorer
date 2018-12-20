import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ShareModule } from '../share/share.module';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    ShareModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
