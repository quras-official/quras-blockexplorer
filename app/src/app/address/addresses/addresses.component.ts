import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  addresses: Address[];
  pageSize = 10;
  maxSize = 5;
  total = 0;
  page = 1;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses(): void {
    this.apiService.getAddresses((this.page - 1) * this.pageSize, this.pageSize)
    .subscribe(res => {
      this.addresses = res.addresses;
      this.total = res.total;
    });
  }

  onPaging(page: number) {
    this.getAddresses();
  }

}
