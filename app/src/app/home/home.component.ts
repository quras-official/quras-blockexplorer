import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Block } from '../models/block';
import { Tx } from '../models/tx';
import * as $ from 'jquery';

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
  ) {}

  ngOnInit() {
    this.getBlocks();
    this.getTxs();
  }

  getBlocks(): void {
    $('#mydiv').show();
    this.apiService.getBlocks(0, 0)
    .subscribe((data: any) => {
      setTimeout(() => {
        $('#mydiv').hide();
      }, 1000);
      this.blocks = data.blocks
    });
  }

  getTxs(): void {
    this.apiService.getTxs()
    .subscribe((data: any) => {
      this.txs = data.txs
    });
  }

}
