import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Tx } from 'src/app/models/tx';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-txs',
  templateUrl: './txs.component.html',
  styleUrls: ['./txs.component.scss']
})
export class TxsComponent implements OnInit {

  txs: Tx[];
  pageSize = 20;
  maxSize = 5;
  total = 0;
  page = 1;

  constructor(
    private apiService: ApiService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.getTxs();
  }

  getTxs(): void {
    this.ngxService.start();
    this.apiService.getTxs()
    .subscribe((data: any) => {
      this.txs = data.txs;
      this.total = data.total;
      setTimeout(() => {
        this.ngxService.stop();
      }, 2000);
    });
  }

  onPaging(page: number) {
    this.getTxs();
  }

}
