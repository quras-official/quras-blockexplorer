import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Node } from 'src/app/models/node';
import * as $ from 'jquery';

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
  ) { }

  ngOnInit() {
    $('#mydiv').show();
    const id = this.route.snapshot.paramMap.get('id');
    // const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getNode(id)
      .subscribe(node => {
        this.node = node
        setTimeout(() => {
          $('#mydiv').hide();
        }, 1000);
      });
  }

}
