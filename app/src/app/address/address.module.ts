import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AddressesComponent } from './addresses/addresses.component';
import { AddressComponent } from './address/address.component';
import { AddressRoutingModule } from './address-routing.module';

@NgModule({
  declarations: [
    AddressesComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    AddressRoutingModule
  ]
})
export class AddressModule { }
