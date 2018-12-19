import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  @Input() records: any;
  @Input() symbol: string;
  addresses: any[];
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
    this.addresses = this.records.slice((page - 1) * this.pageSize, page * this.pageSize);
  }

}
