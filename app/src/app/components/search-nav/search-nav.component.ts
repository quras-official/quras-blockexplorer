import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.scss']
})
export class SearchNavComponent implements OnInit {

  q: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log('search-nav called');
    this.q = '';
  }

  search(): void {
    if (this.q) {
      this.router.navigate(['/search'], {
        queryParams: { q: this.q }
      });
      this.q = '';
    }
  }

}
