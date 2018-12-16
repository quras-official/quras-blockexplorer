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

    const assets = [
      { id: 201, hash: 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
        type: 'GoverningToken', symbol: 'QRS', name: 'QRS', amount: 10000000, issued: 90000000,
        precision: 5, owner: 'Abf2qMs1pzQb8kYk9RuxtUb9jtRKJVuBJt', block_time: 15923142125,
        transaction_count: 10, address_count: 200, transfer_count: 300
      }, { id: 202, hash: 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
        type: 'GoverningToken', symbol: 'QRG', name: 'QRG', amount: 10000000, issued: 90000000,
        precision: 5, owner: 'Abf2qMs1pzQb8kYk9RuxtUb9jtRKJVuBJt', block_time: 15923142125,
        transaction_count: 10, address_count: 200, transfer_count: 300
      }, { id: 203, hash: 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
        type: 'GoverningToken', symbol: 'QRA', name: 'QRA', amount: 10000000, issued: 90000000,
        precision: 5, owner: 'Abf2qMs1pzQb8kYk9RuxtUb9jtRKJVuBJt', block_time: 15923142125,
        transaction_count: 10, address_count: 200, transfer_count: 300
      }, { id: 204, hash: 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
        type: 'GoverningToken', symbol: 'QRB', name: 'QRB', amount: 10000000, issued: 90000000,
        precision: 5, owner: 'Abf2qMs1pzQb8kYk9RuxtUb9jtRKJVuBJt', block_time: 15923142125,
        transaction_count: 10, address_count: 200, transfer_count: 300
      }
    ];

    const addresses = [
      { id: 301, transaction_hash: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        block_time: 15923142125, transaction_count: 10, transfer_count: 300,
        balance: '10 QRS, 0 QRG', claim: '0 QRG'
      }, { id: 302, transaction_hash: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        block_time: 15923142125, transaction_count: 10, transfer_count: 300,
        balance: '10 QRS, 0 QRG', claim: '0 QRG'
      }, { id: 303, transaction_hash: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        block_time: 15923142125, transaction_count: 10, transfer_count: 300,
        balance: '10 QRS, 0 QRG', claim: '0 QRG'
      }, { id: 304, transaction_hash: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        block_time: 15923142125, transaction_count: 10, transfer_count: 300,
        balance: '10 QRS, 0 QRG', claim: '0 QRG'
      }
    ];

    return {blocks, txs, assets, addresses};
  }

  genId(blocks: any[]): number {
    return blocks.length > 0 ? Math.max(...blocks.map(block => block.id)) + 1 : 10001;
  }
}
