import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Block } from '../models/block';
import { Tx } from '../models/tx';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public blocks: Block[];
  public txs: Tx[];

  constructor(
    private apiService: ApiService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.getBlocks();
    this.getTxs();
  }

  getBlocks(): void {
    this.ngxService.start();
    this.apiService.getBlocks(0, 0)
    .subscribe((data: any) => {
      setTimeout(() => {
        this.ngxService.stop();
      }, 2000);
      this.blocks = data.blocks
    });
  }

  getTxs(): void {
    // this.ngxService.startLoader('txs-loader');
    this.apiService.getTxs()
    .subscribe((data: any) => {
      // this.ngxService.stopLoader('txs-loader');
      this.txs = data.txs
    });
  }

}
