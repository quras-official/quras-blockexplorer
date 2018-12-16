import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const blocks = [
      { id: 1, height: 1, hash: '1234', txCount: 5, size: 100, time: 1239,
        producer: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        prev: '1b20c9a6a01124ba3b09c6d99aa45aa601003c0f74a07e5393e571d7af673df5',
        merkle: '3ff8dbb1b566494f48f900493b5a8ec2b984e482249d0675c400bd55feac6f6e' },
      { id: 2, height: 2, hash: '1234', txCount: 5, size: 100, time: 1239,
        producer: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        prev: '1b20c9a6a01124ba3b09c6d99aa45aa601003c0f74a07e5393e571d7af673df5',
        merkle: '3ff8dbb1b566494f48f900493b5a8ec2b984e482249d0675c400bd55feac6f6e' },
      { id: 3, height: 3, hash: '1234', txCount: 5, size: 100, time: 1239,
        producer: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        prev: '1b20c9a6a01124ba3b09c6d99aa45aa601003c0f74a07e5393e571d7af673df5',
        merkle: '3ff8dbb1b566494f48f900493b5a8ec2b984e482249d0675c400bd55feac6f6e' },
      { id: 4, height: 4, hash: '1234', txCount: 5, size: 100, time: 1239,
        producer: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        prev: '1b20c9a6a01124ba3b09c6d99aa45aa601003c0f74a07e5393e571d7af673df5',
        merkle: '3ff8dbb1b566494f48f900493b5a8ec2b984e482249d0675c400bd55feac6f6e' }
    ];
    const txs = [
      { id: 101, type: 'Invocation', hash: '1234', size: 100, block_height: 1, block_time: 1239 },
      { id: 102, type: 'Gas Claim', hash: '1234', size: 100, block_height: 1, block_time: 1239 },
      { id: 103, type: 'Contract', hash: '1234', size: 100, block_height: 1, block_time: 1239 },
      { id: 104, type: 'Invocation', hash: '1234', size: 100, block_height: 1, block_time: 1239 }
    ];
    return {blocks, txs};
  }

  genId(blocks: any[]): number {
    return blocks.length > 0 ? Math.max(...blocks.map(block => block.id)) + 1 : 10001;
  }
}
