import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  public addresses: Address[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses(): void {
    this.apiService.getAddresses()
    .subscribe(addresses => this.addresses = addresses);
  }

}
