import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Block } from '../models/block';
import { Tx } from '../models/tx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public blocks: Block[];
  public txs: Tx[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getBlocks();
    this.getTxs();
  }

  getBlocks(): void {
    this.apiService.getBlocks()
    .subscribe(res => {
      this.blocks = res.blocks;
    });
  }

  getTxs(): void {
    this.apiService.getTxs()
    .subscribe(res => {
      this.txs = res.txs;
    });
  }

}
