import { Component, OnInit } from '@angular/core';
import { Observable, empty, of } from 'rxjs';
import { catchError, switchMap, tap, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query$: Observable<string>;
  result$: Observable<string>;
  private apiServer: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private ngxService: NgxUiLoaderService
  ) {
    this.apiServer = environment.apiServer;
  }

  ngOnInit() {
    this.query$ = this.route.queryParams.pipe(
      map(queryParams => queryParams.q)
    );
    this.result$ = this.query$.pipe(
      switchMap(query => this.tryBlockHeight(query)),
      switchMap(query => this.tryTransaction(query)),
      // switchMap(query => this.tryBlockHash(query)),
      switchMap(query => this.tryAddress(query)),
      tap(query => console.log('no result', query))
    );
  }

  private tryBlockHeight(query: string): Observable<string> {
    const blockHeight = Number(query);
    if (!isNaN(blockHeight) && query.length < 64) {
      this.ngxService.start();
      return this.http.get(this.apiServer + `/blocks/${blockHeight}`).pipe(
        catchError(() => {
          this.ngxService.stop();
          return of(null)
        }),
        switchMap(data => {
          this.ngxService.stop();
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
    if (query.length >= 66) {
      this.ngxService.start();
      return this.http.get(this.apiServer + `/txs/${query}`).pipe(
        catchError(() => {
          this.ngxService.stop();
          return of(null)
        }),
        switchMap(transaction => {
          this.ngxService.stop();
          if (transaction) {
            this.router.navigate(['/txs', transaction.txid], { replaceUrl: true });
            return empty();
          }
          return of(query);
        })
      );
    }
    return of(query);
  }

  private tryBlockHash(query: string): Observable<string> {
    if (query.length >= 64) {
      this.ngxService.start();
      return this.http.get(this.apiServer + `/blocks/${query}`).pipe(
        catchError(() => {
          this.ngxService.stop();
          return of(null)
        }),
        switchMap(block => {
          this.ngxService.stop();
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
    if (query.length <= 40) {
      this.ngxService.start();
      return this.http.get(this.apiServer + `/addresses/${query}`).pipe(
        catchError(() => {
          this.ngxService.stop();
          return of(null)
        }),
        switchMap(address => {
          this.ngxService.stop();
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
