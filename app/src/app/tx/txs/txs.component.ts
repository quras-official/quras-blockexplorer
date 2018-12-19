import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Tx } from 'src/app/models/tx';

@Component({
  selector: 'app-txs',
  templateUrl: './txs.component.html',
  styleUrls: ['./txs.component.scss']
})
export class TxsComponent implements OnInit {

  txs: Tx[];
  pageSize = 10;
  maxSize = 5;
  total = 0;
  page = 1;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getTxs();
  }

  getTxs(): void {
    this.apiService.getTxs()
    .subscribe(res => {
      this.txs = res.txs;
      this.total = res.total;
    });
  }

  onPaging(page: number) {
    this.getTxs();
  }

}
