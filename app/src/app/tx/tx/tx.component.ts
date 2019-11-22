import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Tx } from 'src/app/models/tx';
import * as $ from 'jquery';

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
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    // const id = +this.route.snapshot.paramMap.get('id');
    $('#mydiv').show();
    this.apiService.getTx(id)
      .subscribe(tx => {
        this.tx = tx
        this.tx.hasSpent = false
        tx.vouts.forEach(vv => {
          if (vv.status == "spent")
            this.tx.hasSpent = true
        });
        setTimeout(() => {
          $('#mydiv').hide();
        }, 1000);
      });
  }

  toggleScript(index) {
    this.script_ops[index] = !this.script_ops[index];
  }

}
