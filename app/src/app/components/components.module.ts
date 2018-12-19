import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { TransfersComponent } from './transfers/transfers.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddressesComponent } from './addresses/addresses.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        TransfersComponent,
        TransactionsComponent,
        AddressesComponent,
        SearchComponent
    ],
    imports: [
        ShareModule,
        RouterModule
    ],
    exports: [
        TransfersComponent,
        TransactionsComponent,
        AddressesComponent,
        SearchComponent
    ]
})
export class ComponentsModule { }
