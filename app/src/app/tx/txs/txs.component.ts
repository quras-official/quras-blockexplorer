import { Component, OnInit } from '@angular/core';
import { Tx } from '../../models/tx';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-txs',
  templateUrl: './txs.component.html',
  styleUrls: ['./txs.component.scss']
})
export class TxsComponent implements OnInit {

  public txs: Tx[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getTxs();
  }

  getTxs(): void {
    this.apiService.getTxs()
    .subscribe(txs => this.txs = txs);
  }

}
