import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Node } from 'src/app/models/node';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss']
})
export class NodesComponent implements OnInit {

  nodes: Node[];
  pageSize = 20;
  maxSize = 5;
  total = 0;
  page = 1;

  constructor(
    private apiService: ApiService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.getNodes();
  }

  getNodes(): void {
    this.ngxService.start();
    this.apiService.getNodes(0, 0)
    .subscribe((data: any) => {
      this.nodes = data.nodes
      this.total = data.total//nodes.length * 20;
      setTimeout(() => {
        this.ngxService.stop();
      }, 2000);
    });
  }

  onPaging(page: number) {
    this.ngxService.start();
    this.apiService.getNodes((page - 1) * this.pageSize, this.pageSize)
    .subscribe((data: any) => {
      this.nodes = data.nodes
      this.total = data.total//nodes.length * 20;
      setTimeout(() => {
        this.ngxService.stop();
      }, 2000);
    });
  }

}
