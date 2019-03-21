import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NetworkStatus } from 'src/app/models/network-status';
import { environment } from 'src/environments/environment';
import * as $ from 'jquery';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  status: NetworkStatus;
  network: string;

  constructor(
    private apiService: ApiService
  ) {
    this.network = environment.network;
  }

  ngOnInit() {
    $('#mydiv').show();
    this.apiService.getStatus()
      .subscribe(status => {
        this.status = status
        setTimeout(() => {
          $('#mydiv').hide();
        }, 1000);
      });
  }

}
