import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Block } from '../models/block';
import { Tx } from '../models/tx';
import { Asset } from '../models/asset';
import { Address } from '../models/address';
import { Node } from '../models/node';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getBlocks(): Observable<Block[]> {
    return this.http.get<Block[]>('api/blocks')
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
    return this.http.get<Tx[]>('api/txs')
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

  public getAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>('api/assets')
      .pipe(
        tap(_ => this.log('fetched assets')),
        catchError(this.handleError('getAssets', []))
      );
  }

  public getAsset(id: number): Observable<Asset> {
    return this.http.get<Asset>(`api/assets/${id}`)
      .pipe(
        tap(_ => this.log(`fetched asset id=${id}`)),
        catchError(this.handleError<Asset>(`getAsset id=${id}`))
      );
  }

  public getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>('api/addresses')
      .pipe(
        tap(_ => this.log('fetched addresses')),
        catchError(this.handleError('getAddresses', []))
      );
  }

  public getAddress(id: number): Observable<Address> {
    return this.http.get<Address>(`api/addresses/${id}`)
      .pipe(
        tap(_ => this.log(`fetched address id=${id}`)),
        catchError(this.handleError<Address>(`getAddress id=${id}`))
      );
  }

  public getNodes(): Observable<Node[]> {
    return this.http.get<Node[]>('api/nodes')
      .pipe(
        tap(_ => this.log('fetched nodes')),
        catchError(this.handleError('getNodes', []))
      );
  }

  public getNode(id: number): Observable<Node> {
    return this.http.get<Node>(`api/nodes/${id}`)
      .pipe(
        tap(_ => this.log(`fetched node id=${id}`)),
        catchError(this.handleError<Node>(`getNode id=${id}`))
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
