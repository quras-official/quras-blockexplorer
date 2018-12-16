import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const blocks = [
      { id: 1, hash: '938d97df1be41edffbc08b40b9c07778a9085b700a50c19b90533a08d4700b68', transaction_count: 5, size: 100, time: 1239,
        producer: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        prev_block_hash: '',
        merkle: '3ff8dbb1b566494f48f900493b5a8ec2b984e482249d0675c400bd55feac6f6e' },
      { id: 2, hash: '31f819134f34b91fcef10122cb49931a9912c87c80ada7b5f0e50d81abcc6500', transaction_count: 12, size: 100, time: 1239,
        producer: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        prev_block_hash: '938d97df1be41edffbc08b40b9c07778a9085b700a50c19b90533a08d4700b68',
        merkle: '3ff8dbb1b566494f48f900493b5a8ec2b984e482249d0675c400bd55feac6f6e' },
      { id: 3, hash: '7e99125c0c83e23db06027bfc48a91be5a26618fa1e7cd5841419ac53c896730', transaction_count: 19, size: 100, time: 1239,
        producer: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        prev_block_hash: '31f819134f34b91fcef10122cb49931a9912c87c80ada7b5f0e50d81abcc6500',
        merkle: '3ff8dbb1b566494f48f900493b5a8ec2b984e482249d0675c400bd55feac6f6e' },
      { id: 4, hash: 'de17f345a8383471c68471edf1f3470adacfd3520a81712215ef934931b9298a', transaction_count: 24, size: 100, time: 1239,
        producer: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        prev_block_hash: '7e99125c0c83e23db06027bfc48a91be5a26618fa1e7cd5841419ac53c896730',
        merkle: '3ff8dbb1b566494f48f900493b5a8ec2b984e482249d0675c400bd55feac6f6e' }
    ];

    const txs = [
      { id: 101, type: 'Invocation', hash: '1234', size: 100, block_id: 1, block_time: 1239 },
      { id: 102, type: 'Gas Claim', hash: '1234', size: 100, block_id: 1, block_time: 1239 },
      { id: 103, type: 'Contract', hash: '1234', size: 100, block_id: 1, block_time: 1239 },
      { id: 104, type: 'Invocation', hash: '1234', size: 100, block_id: 1, block_time: 1239 }
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

    const nodes = [
      { id: 401, account: 'eoshuobipool', public_key: 'EOS5XKswW26cR5VQeDGwgNb5aixv1AMcKkdDNrC59KzNSBfnH6TR7',
        votes: 108340201, votes_percent: 2.08, url: 'http://eoshuobipool.com', position: 1, daily_reward: '770 QRG'
      }, { id: 402, account: 'eoshuobipool', public_key: 'EOS5XKswW26cR5VQeDGwgNb5aixv1AMcKkdDNrC59KzNSBfnH6TR7',
        votes: 108340201, votes_percent: 2.08, url: 'http://eoshuobipool.com', position: 1, daily_reward: '770 QRG'
      }, { id: 403, account: 'eoshuobipool', public_key: 'EOS5XKswW26cR5VQeDGwgNb5aixv1AMcKkdDNrC59KzNSBfnH6TR7',
        votes: 108340201, votes_percent: 2.08, url: 'http://eoshuobipool.com', position: 1, daily_reward: '770 QRG'
      }, { id: 404, account: 'eoshuobipool', public_key: 'EOS5XKswW26cR5VQeDGwgNb5aixv1AMcKkdDNrC59KzNSBfnH6TR7',
        votes: 108340201, votes_percent: 2.08, url: 'http://eoshuobipool.com', position: 1, daily_reward: '770 QRG'
      }
    ];

    return {blocks, txs, assets, addresses, nodes};
  }

  genId(records: any[]): number {
    return records.length > 0 ? Math.max(...records.map(record => record.id)) + 1 : 10001;
  }
}
