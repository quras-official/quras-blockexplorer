import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Block } from '../models/block';
import { Tx } from '../models/tx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getBlocks(): Observable<Block[]> {
    return this.http.get<Block[]>('/api/blocks')
      .pipe(
        tap(_ => this.log('fetched blockes')),
        catchError(this.handleError('getBlocks', []))
      );
  }

  public getBlock(id: number): Observable<Block> {
    return this.http.get<Block>(`api/blocks/${id}`)
      .pipe(
        tap(_ => this.log(`fetched block id=${id}`)),
        catchError(this.handleError<Block>(`getBlock id=${id}`))
      );
  }

  public getTxs(): Observable<Tx[]> {
    return this.http.get<Tx[]>('/api/txs')
      .pipe(
        tap(_ => this.log('fetched txs')),
        catchError(this.handleError('getTxs', []))
      );
  }

  public getTx(id: number): Observable<Tx> {
    return this.http.get<Tx>(`api/txs/${id}`)
      .pipe(
        tap(_ => this.log(`fetched tx id=${id}`)),
        catchError(this.handleError<Tx>(`getTx id=${id}`))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {

  }
}
