import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Block } from '../../models/block';
import * as $ from 'jquery';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  public block: Block;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) =>{
      const id = params.id;
      $('#mydiv').show();
      // const id = +this.route.snapshot.paramMap.get('id');
      this.apiService.getBlock(id)
        .subscribe(block => {
          this.block = block
          setTimeout(() => {
            $('#mydiv').hide();
          }, 1000);
        });
    })
  }
}
