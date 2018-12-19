import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { AddressesComponent } from './addresses/addresses.component';
import { AddressComponent } from './address/address.component';
import { AddressRoutingModule } from './address-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    AddressesComponent,
    AddressComponent
  ],
  imports: [
    ShareModule,
    ComponentsModule,
    AddressRoutingModule
  ]
})
export class AddressModule { }
