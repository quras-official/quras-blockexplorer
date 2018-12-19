import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { TransfersComponent } from './transfers/transfers.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddressesComponent } from './addresses/addresses.component';

@NgModule({
    declarations: [
        TransfersComponent,
        TransactionsComponent,
        AddressesComponent
    ],
    imports: [
        ShareModule,
        RouterModule
    ],
    exports: [
        TransfersComponent,
        TransactionsComponent,
        AddressesComponent
    ]
})
export class ComponentsModule { }
