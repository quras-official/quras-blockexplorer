import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Node } from 'src/app/models/node';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  node: Node;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ngxService.start();
    // const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getNode(id)
      .subscribe(node => {
        this.node = node
        this.ngxService.stop();
      });
  }

}
