import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Asset } from 'src/app/models/asset';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.getAssets();
  }

  getAssets(): void {
    this.ngxService.start();
    this.apiService.getAssets(0, 0)
    .subscribe((data: any) => {
      this.assets = data.assets;
      this.total = data.total;
      setTimeout(() => {
        this.ngxService.stop();
      }, 2000);
    });
  }

  onPaging(page: number) {
    this.ngxService.start();
    this.apiService.getAssets((page - 1) * this.pageSize, this.pageSize)
    .subscribe((data: any) => {
      this.assets = data.assets;
      this.total = data.total;
      setTimeout(() => {
        this.ngxService.stop();
      }, 2000);
    });
  }

}
