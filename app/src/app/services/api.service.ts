import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Block } from '../models/block';
import { Tx } from '../models/tx';
import { Asset } from '../models/asset';
import { Address } from '../models/address';
import { Node } from '../models/node';
import { NetworkStatus } from '../models/network-status';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiServer: string;

  constructor(private http: HttpClient) {
    this.apiServer = environment.apiServer;
  }

  public getBlocks(offset: number, limit: number): Observable<any> {
    return this.http.get<any>(this.apiServer + `/blocks/${offset}/${limit}`)
      .pipe(
        tap(_ => this.log('fetched blockes')),
        catchError(this.handleError(`getBlocks offset=${offset},limit=${limit}`, []))
      );
  }

  public getBlock(id: number | string): Observable<Block> {
    return this.http.get<Block>(this.apiServer + `/blocks/${id}`)
      .pipe(
        tap(_ => this.log(`fetched block id=${id}`)),
        catchError(this.handleError<Block>(`getBlock id=${id}`))
      );
  }

  public getTxs(): Observable<any> {
    return this.http.get<any>(this.apiServer + '/txs')
      .pipe(
        tap(_ => this.log('fetched txs')),
        catchError(this.handleError('getTxs', []))
      );
  }

  public getTx(id: number | string): Observable<Tx> {
    return this.http.get<Tx>(this.apiServer + `/txs/${id}`)
      .pipe(
        tap(_ => this.log(`fetched tx id=${id}`)),
        catchError(this.handleError<Tx>(`getTx id=${id}`))
      );
  }

  public getAssets(offset: number, limit: number): Observable<any> {
    return this.http.get<any>(this.apiServer + `/assets/${offset}/${limit}`)
      .pipe(
        tap(_ => this.log('fetched assets')),
        catchError(this.handleError(`getAssets offset=${offset},limit=${limit}`, []))
      );
  }

  public getAsset(id: number | string): Observable<Asset> {
    return this.http.get<Asset>(this.apiServer + `/assets/${id}`)
      .pipe(
        tap(_ => this.log(`fetched asset id=${id}`)),
        catchError(this.handleError<Asset>(`getAsset id=${id}`))
      );
  }

  public getAddresses(offset: number, limit: number): Observable<any> {
    return this.http.get<any>(this.apiServer + `/addresses/${offset}/${limit}`)
      .pipe(
        tap(_ => this.log('fetched addresses')),
        catchError(this.handleError(`getAddresses offset=${offset},limit=${limit}`, []))
      );
  }

  public getAddress(id: number | string): Observable<Address> {
    return this.http.get<Address>(this.apiServer + `/addresses/${id}`)
      .pipe(
        tap(_ => this.log(`fetched address id=${id}`)),
        catchError(this.handleError<Address>(`getAddress id=${id}`))
      );
  }

  public getNodes(offset: number, limit: number): Observable<any> {
    return this.http.get<any>(this.apiServer + `/nodes/${offset}/${limit}`)
      .pipe(
        tap(_ => this.log('fetched nodes')),
        catchError(this.handleError(`getNodes offset=${offset},limit=${limit}`, []))
      );
  }

  public getNode(id: number | string): Observable<Node> {
    return this.http.get<Node>(this.apiServer + `/nodes/${id}`)
      .pipe(
        tap(_ => this.log(`fetched node id=${id}`)),
        catchError(this.handleError<Node>(`getNode id=${id}`))
      );
  }

  public getStatus(): Observable<NetworkStatus> {
    return this.http.get<NetworkStatus>(this.apiServer + '/status')
      .pipe(
        tap(_ => this.log('fetched status')),
        catchError(this.handleError<NetworkStatus>('getStatus'))
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
