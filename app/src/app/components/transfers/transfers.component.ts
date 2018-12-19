import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {

  @Input() records: any;
  transfers: any[];
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
    this.transfers = this.records.slice((page - 1) * this.pageSize, page * this.pageSize);
  }

}
