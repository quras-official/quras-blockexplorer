import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Tx } from 'src/app/models/tx';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-tx',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.scss']
})
export class TxComponent implements OnInit {

  tx: Tx;
  script_ops: boolean[] = [false, false, false];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    // const id = +this.route.snapshot.paramMap.get('id');
    this.ngxService.start();
    this.apiService.getTx(id)
      .subscribe(tx => {
        this.tx = tx
        this.ngxService.stop();
      });
  }

  toggleScript(index) {
    this.script_ops[index] = !this.script_ops[index];
  }

}
