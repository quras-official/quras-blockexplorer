import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Asset } from 'src/app/models/asset';

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
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getAssets();
  }

  getAssets(): void {
    this.apiService.getAssets()
    .subscribe(assets => {
      this.assets = assets;
      this.total = assets.length * 20;
    });
  }

  onPaging(page: number) {
    this.getAssets();
  }

}
