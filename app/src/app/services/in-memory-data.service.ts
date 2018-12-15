import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Block } from '../models/block';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const blocks = [
      { height: 1, hash: '1234', txCount: '5' },
      { height: 2, hash: '1234', txCount: '5' },
      { height: 3, hash: '1234', txCount: '5' },
      { height: 4, hash: '1234', txCount: '5' }
    ];
    return {blocks};
  }

  genId(blocks: Block[]): number {
    return blocks.length > 0 ? Math.max(...blocks.map(block => block.height)) + 1 : 11;
  }
}
