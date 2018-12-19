import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NetworkStatus } from 'src/app/models/network-status';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  status: NetworkStatus;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getStatus()
      .subscribe(status => this.status = status);
  }

}
