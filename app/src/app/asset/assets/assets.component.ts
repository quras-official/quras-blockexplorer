import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Asset } from 'src/app/models/asset';
import * as $ from 'jquery';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  assets: Asset[];
  pageSize = 10;
  maxSize = 5;
  total = 0;
  page = 1;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.getAssets();
  }

  getAssets(): void {
    $('#mydiv').show();
    this.apiService.getAssets(0, 0)
    .subscribe((data: any) => {
      this.assets = data.assets;
      this.total = data.total;
      setTimeout(() => {
        $('#mydiv').hide();
      }, 1000);
    });
  }

  onPaging(page: number) {
    $('#mydiv').show();
    this.apiService.getAssets((page - 1) * this.pageSize, this.pageSize)
    .subscribe((data: any) => {
      this.assets = data.assets;
      this.total = data.total;
      setTimeout(() => {
        $('#mydiv').hide();
      }, 1000);
    });
  }

}
