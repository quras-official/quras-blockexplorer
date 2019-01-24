import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Asset } from 'src/app/models/asset';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  asset: Asset;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.ngxService.start();
    const id = this.route.snapshot.params.id;
    // const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getAsset(id)
      .subscribe(asset => {
        this.asset = asset;
        this.ngxService.stop();
      });
  }
}
