import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Asset } from 'src/app/models/asset';
import * as $ from 'jquery';

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
  ) { }

  ngOnInit() {
    $('#mydiv').show();
    const id = this.route.snapshot.params.id;
    // const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getAsset(id)
      .subscribe(asset => {
        this.asset = asset;
        setTimeout(() => {
          $('#mydiv').hide();
        }, 1000);
      });
  }
}
