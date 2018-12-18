import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Tx } from 'src/app/models/tx';

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
    private apiService: ApiService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getTx(id)
      .subscribe(tx => this.tx = tx);
  }

  toggleScript(index) {
    this.script_ops[index] = !this.script_ops[index];
  }

}
