import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Node } from 'src/app/models/node';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss']
})
export class NodesComponent implements OnInit {

  public nodes: Node[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getNodes();
  }

  getNodes(): void {
    this.apiService.getNodes()
    .subscribe(nodes => this.nodes = nodes);
  }

}
