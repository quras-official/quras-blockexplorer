import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Address } from 'src/app/models/address';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  address: Address;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;//+this.route.snapshot.paramMap.get('id');
    this.ngxService.start();
    this.apiService.getAddress(id)
      .subscribe(address => {
        this.address = address;
        setTimeout(() => {
          this.ngxService.stop();
        }, 2000);
      });
  }

}
