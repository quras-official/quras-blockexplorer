import { Component, OnInit } from '@angular/core';
import { Observable, empty, of } from 'rxjs';
import { catchError, switchMap, tap, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query$: Observable<string>;
  result$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    console.log('called');
    this.query$ = this.route.queryParams.pipe(
      map(queryParams => queryParams.q)
    );
    this.result$ = this.query$.pipe(
      switchMap(query => this.tryBlockHeight(query)),
      switchMap(query => this.tryTransaction(query)),
      switchMap(query => this.tryBlockHash(query)),
      switchMap(query => this.tryAddress(query)),
      tap(query => console.log('no result', query))
    );
  }

  private tryBlockHeight(query: string): Observable<string> {
    const blockHeight = Number(query);
    if (!isNaN(blockHeight)) {
      console.log('tryBlockHeight');
      return this.apiService.getBlock(blockHeight).pipe(
        catchError(() => of(null)),
        switchMap(data => {
          if (data) {
            this.router.navigate(['/blocks', blockHeight], { replaceUrl: true });
            return empty();
          }
          return of(query);
        })
      );
    }
    return of(query);
  }

  private tryTransaction(query: string): Observable<string> {
    if (query.length === 64) {
      return this.apiService.getTx(query).pipe(
        catchError(() => of(null)),
        switchMap(transaction => {
          if (transaction) {
            this.router.navigate(['/transactions', transaction.txid], { replaceUrl: true });
            return empty();
          }
          return of(query);
        })
      );
    }
    return of(query);
  }

  private tryBlockHash(query: string): Observable<string> {
    if (query.length === 64) {
      return this.apiService.getBlock(query).pipe(
        catchError(() => of(null)),
        switchMap(block => {
          if (block) {
            this.router.navigate(['/blocks', block.block_height], { replaceUrl: true });
            return empty();
          }
          return of(query);
        })
      );
    }
    return of(query);
  }

  private tryAddress(query: string): Observable<string> {
    if (query.length <= 12) {
      return this.apiService.getAddress(query).pipe(
        catchError(() => of(null)),
        switchMap(address => {
          if (address) {
            this.router.navigate(['/addresses', address.address], { replaceUrl: true });
            return empty();
          }
          return of(query);
        })
      );
    }
    return of(query);
  }

}
