import { Component, OnInit } from '@angular/core';
import { Observable, empty, of } from 'rxjs';
import { catchError, switchMap, tap, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


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
    private http: HttpClient
  ) { }

  ngOnInit() {
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
      return this.http.get(`api/blocks/${blockHeight}`).pipe(
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
      return this.http.get(`api/txs/${query}`).pipe(
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
      return this.http.get(`api/blocks/${query}`).pipe(
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
      return this.http.get(`api/addresses/${query}`).pipe(
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
