import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { TransfersComponent } from './transfers/transfers.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddressesComponent } from './addresses/addresses.component';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TransfersComponent,
        TransactionsComponent,
        AddressesComponent,
        SearchNavComponent
    ],
    imports: [
        ShareModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        TransfersComponent,
        TransactionsComponent,
        AddressesComponent,
        SearchNavComponent
    ]
})
export class ComponentsModule { }
