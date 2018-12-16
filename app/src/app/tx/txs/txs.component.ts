import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Tx } from 'src/app/models/tx';

@Component({
  selector: 'app-txs',
  templateUrl: './txs.component.html',
  styleUrls: ['./txs.component.scss']
})
export class TxsComponent implements OnInit {

  public txs: Tx[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getTxs();
  }

  getTxs(): void {
    this.apiService.getTxs()
    .subscribe(txs => this.txs = txs);
  }

}
