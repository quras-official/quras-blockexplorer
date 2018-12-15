import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesComponent } from './addresses/addresses.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [AddressesComponent, AddressComponent],
  imports: [
    CommonModule
  ]
})
export class AddressModule { }
