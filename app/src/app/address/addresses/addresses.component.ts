import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Address } from 'src/app/models/address';
import * as $ from 'jquery';

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
    $('#mydiv').show();
    this.apiService.getAddresses()
    .subscribe((data: any) => {
      this.addresses = data.data.addresses;
      this.total = data.total;
      setTimeout(() => {
        $('#mydiv').hide();
      }, 1000);
    });
  }

  onPaging(page: number) {
    this.getAddresses();
  }

}
