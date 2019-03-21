import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Address } from 'src/app/models/address';
import * as $ from 'jquery';

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
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;//+this.route.snapshot.paramMap.get('id');
    $('#mydiv').show();
    this.apiService.getAddress(id)
      .subscribe(address => {
        this.address = address;
        setTimeout(() => {
          $('#mydiv').hide();
        }, 1000);
      });
  }

}
