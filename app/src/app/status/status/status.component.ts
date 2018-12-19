import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NetworkStatus } from 'src/app/models/network-status';
import { environment } from 'src/environments/environment';

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
    this.apiService.getStatus()
      .subscribe(status => this.status = status);
  }

}
