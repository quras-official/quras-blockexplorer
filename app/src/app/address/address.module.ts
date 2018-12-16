import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    AddressRoutingModule
  ]
})
export class AddressModule { }
