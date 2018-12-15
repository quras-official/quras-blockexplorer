import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Block } from '../models/block';

@Injectable({
  providedIn: 'root'
})
export class BlocksService {

  //public readonly blocks: Subject<Array<Block>> = new Subject();

  constructor(private http: HttpClient) { }

  public getBlocks(): Observable<Block[]> {
    return this.http.get<Block[]>('/api/blocks')
      .pipe(
        tap(_ => this.log('fetched blockes')),
        catchError(this.handleError('getBlocks', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  private log(message: string) {

  }
}
