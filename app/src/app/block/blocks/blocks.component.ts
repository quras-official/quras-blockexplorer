import { Component, OnInit } from '@angular/core';
import { Block } from '../../models/block';
import { ApiService } from '../../services/api.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  blocks: Block[];
  pageSize = 20;
  maxSize = 5;
  total = 0;
  page = 1;

  constructor(
    private apiService: ApiService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.getBlocks(0, 0);
  }

  getBlocks(offset: Number, limit: Number): void {
    this.ngxService.start();
    this.apiService.getBlocks(offset, limit)
    .subscribe((data: any) => {
      this.blocks = data.blocks;
      this.total = data.total;
      this.ngxService.stop();
    });
  }

  onPaging(page: number) {
    this.ngxService.start();
    this.apiService.getBlocks((page - 1) * this.pageSize + 1, this.pageSize)
    .subscribe((data: any) => {
      this.blocks = data.blocks;
      this.total = data.total;
      this.ngxService.stop();
    });
  }

  /*private loadBlocks(): void {
    let data = '{"blocks":[{"height":553870,"size":911149,"hash":"000000000000000000049c50c160b97c7ec467c3a01d4bf7756b3b9a5100fe83","time":1544841887,"txlength":3106,"poolInfo":{}},{"height":553869,"size":941834,"hash":"000000000000000000183f045644655d23086d40bc6487f32d72058b88ed9884","time":1544840515,"txlength":2592,"poolInfo":{"poolName":"SlushPool","url":"https://slushpool.com/"}},{"height":553868,"size":667780,"hash":"0000000000000000002aa93042782d42f612270dd5d303e99bc911cdc2df9973","time":1544839655,"txlength":864,"poolInfo":{}},{"height":553867,"size":878004,"hash":"0000000000000000000013cda4ee7cfdabaca349246e00d019b364deda091b93","time":1544839584,"txlength":2188,"poolInfo":{}},{"height":553866,"size":953006,"hash":"0000000000000000000dba4aac90ff5e019ca2e0876bdc54c5c964e3f2b3442d","time":1544838860,"txlength":3379,"poolInfo":{}},{"height":553865,"size":900993,"hash":"000000000000000000290e2420db4993cbd7220b4157941629e64aeef81498aa","time":1544838233,"txlength":2620,"poolInfo":{}},{"height":553864,"size":928536,"hash":"00000000000000000008d153b0868e06f3991ead2c40ab312b24e766fcc0e6e3","time":1544836471,"txlength":2382,"poolInfo":{"poolName":"AntMiner","url":"https://bitmaintech.com/"}},{"height":553863,"size":942587,"hash":"00000000000000000001099192dce5bd4d17a5051d9e46370f5a4e33ae3363c5","time":1544835721,"txlength":1982,"poolInfo":{}},{"height":553862,"size":323545,"hash":"0000000000000000002a20fba412650affefa6be41ecf94dae7447247719a405","time":1544835064,"txlength":665,"poolInfo":{}},{"height":553861,"size":351617,"hash":"0000000000000000002cffa42c85dec1a2381cc7f849f7706c86834d572c5b2f","time":1544834849,"txlength":877,"poolInfo":{}},{"height":553860,"size":236907,"hash":"0000000000000000000fc555f25a1d7357e004ae016990fdc0f2271490e7f634","time":1544834625,"txlength":453,"poolInfo":{}},{"height":553859,"size":461833,"hash":"0000000000000000002ccdf7f6aed0b741231060ba41f6a06f8e1092cd459ef1","time":1544834426,"txlength":889,"poolInfo":{"poolName":"SlushPool","url":"https://slushpool.com/"}},{"height":553858,"size":927580,"hash":"0000000000000000002e2c4a8cb311f56c4d5e2b79493b5c8883429a11e643a4","time":1544834190,"txlength":1607,"poolInfo":{}},{"height":553857,"size":955935,"hash":"000000000000000000089161ee46a071e734e0e7fc68a748cd27829c462c5dcc","time":1544833875,"txlength":1417,"poolInfo":{}},{"height":553856,"size":888688,"hash":"0000000000000000001117fd3bd74f0bdb0e6342d0883d4178365c87809c1822","time":1544833382,"txlength":2956,"poolInfo":{}},{"height":553855,"size":950124,"hash":"000000000000000000136b4b35d0a9f89f84e70c68f54fd5c11f9cc5ef8e6b31","time":1544832335,"txlength":2236,"poolInfo":{}},{"height":553854,"size":895047,"hash":"000000000000000000248fe80b3febf03163e58c6e4038d952d5f435fdb92f1d","time":1544832174,"txlength":2669,"poolInfo":{}}],"length":17,"pagination":{"next":"2018-12-16","prev":"2018-12-14","currentTs":1544918399,"current":"2018-12-15","isToday":true,"more":false}}';
    this.blocks = JSON.parse(data).blocks;
  }

  public getBlocks(): Array<any> {
    return this.blocks.filter((block, index) => index < this.numBlocks);
  }*/

}
