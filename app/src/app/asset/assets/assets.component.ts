import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Asset } from 'src/app/models/asset';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  public assets: Asset[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getAssets();
  }

  getAssets(): void {
    this.apiService.getAssets()
    .subscribe(assets => this.assets = assets);
  }

}
