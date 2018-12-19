import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  @Input() records: any;
  txs: any[];
  pageSize = 10;
  maxSize = 5;
  total = 0;
  page = 1;

  constructor() { }

  ngOnInit() {
    this.total = this.records.length;
    this.page = 1;
    this.onPaging(this.page);
  }

  onPaging(page: number) {
    this.txs = this.records.slice((page - 1) * this.pageSize, page * this.pageSize);
  }

}
