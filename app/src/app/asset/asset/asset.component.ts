import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Asset } from 'src/app/models/asset';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  asset: Asset;
  addresses: any[];
  txs: any[];
  transfers: any[];
  pageSize = 10;
  maxSize = 5;
  address_total = 0;
  address_page = 1;
  tx_total = 0;
  tx_page = 1;
  transfer_total = 0;
  transfer_page = 1;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getAsset(id)
      .subscribe(asset => {
        this.asset = asset;
        this.address_total = this.asset.addresses.length;
        this.address_page = 1;
        this.onAddressPaging(this.address_page);
        this.tx_total = this.asset.transactions.length;
        this.tx_page = 1;
        this.onTxPaging(this.tx_page);
        this.transfer_total = this.asset.transfers.length;
        this.transfer_page = 1;
        this.onTransferPaging(this.transfer_page);
      });
  }

  onAddressPaging(page: number) {
    this.addresses = this.asset.addresses.slice((page - 1) * this.pageSize, page * this.pageSize);
    console.log(this.pageSize, this.asset.addresses.length, this.addresses.length);
  }

  onTxPaging(page: number) {
    this.txs = this.asset.transactions.slice((page - 1) * this.pageSize, page * this.pageSize);
    console.log(this.pageSize, this.asset.transactions.length, this.txs.length);
  }

  onTransferPaging(page: number) {
    this.transfers = this.asset.transfers.slice((page - 1) * this.pageSize, page * this.pageSize);
    console.log(this.pageSize, this.asset.transfers.length, this.transfers.length);
  }

}
