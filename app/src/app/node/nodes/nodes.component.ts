import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Node } from 'src/app/models/node';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss']
})
export class NodesComponent implements OnInit {

  nodes: Node[];
  pageSize = 10;
  maxSize = 5;
  total = 0;
  page = 1;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getNodes();
  }

  getNodes(): void {
    this.apiService.getNodes()
    .subscribe(nodes => {
      this.nodes = nodes;
      this.total = nodes.length * 20;
    });
  }

  onPaging(page: number) {
    this.getNodes();
  }

}
