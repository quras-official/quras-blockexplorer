import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Block } from '../../models/block';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) =>{
      const id = params.id;
      // const id = +this.route.snapshot.paramMap.get('id');
      this.ngxService.start();
      this.apiService.getBlock(id)
        .subscribe(block => {
          this.block = block
          setTimeout(() => {
            this.ngxService.stop();
          }, 2000);
        });
    })
  }
}
