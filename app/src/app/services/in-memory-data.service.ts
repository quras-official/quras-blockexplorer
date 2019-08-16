import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const blocks = [
      { id: 872,
        version: 2,
        height: 872,
        hash: '938d97df1be41edffbc08b40b9c07778a9085b700a50c19b90533a08d4700b68',
        transaction_count: 5,
        transactions: [
          {
            type: 'Miner',
            txid: 'b1f724dbe809e9952a79ac62012a061a926f6971719bbf7633f043503dbd1939',
            block_time: 1542683357
          }, {
            type: 'Invocation',
            txid: 'bb6e0b82b3dc8fc725a91b46c0ef187692e9565ab1dea939142f6461f1551ce2',
            block_time: 1542683357
          }, {
            type: 'Contract',
            txid: 'aa5996f291632cf0dacdc6b5694fbda5be3dac292ff4ead4627ddc6b66151ccc',
            block_time: 1542683357
          }
        ],
        size: 2310,
        script: {
          verification: null,
          invocation: '8759D52937D82659E3E8768C877EFC1ABD4393BF34D5FD4DB2B2E50B2167B245',
          id: '480d3911-fe0e-48e9-b462-5f86e8dcd0e8'
        },
        time: 1542683358,
        producer: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        prev_block_hash: '1e7c8ff53a5e35722a7f9554d98949b79c54ce15b9934f2459a68aac829761f1',
        merkle: '3ff8dbb1b566494f48f900493b5a8ec2b984e482249d0675c400bd55feac6f6e'
      },
      { id: 871,
        version: 2,
        height: 871,
        hash: '1e7c8ff53a5e35722a7f9554d98949b79c54ce15b9934f2459a68aac829761f1',
        transaction_count: 5,
        transactions: [
          {
            type: 'Miner',
            txid: 'b1f724dbe809e9952a79ac62012a061a926f6971719bbf7633f043503dbd1939',
            block_time: 1542683357
          }, {
            type: 'Invocation',
            txid: 'bb6e0b82b3dc8fc725a91b46c0ef187692e9565ab1dea939142f6461f1551ce2',
            block_time: 1542683357
          }, {
            type: 'Contract',
            txid: 'aa5996f291632cf0dacdc6b5694fbda5be3dac292ff4ead4627ddc6b66151ccc',
            block_time: 1542683357
          }
        ],
        size: 100,
        script: {
          verification: null,
          invocation: '8759D52937D82659E3E8768C877EFC1ABD4393BF34D5FD4DB2B2E50B2167B245',
          id: '480d3911-fe0e-48e9-b462-5f86e8dcd0e8'
        },
        time: 1542683358,
        producer: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        prev_block_hash: 'ade13b19abe4bf6aea26d878ec534df8faff2d27f3b2e6ef7ae739b677153f57',
        merkle: '3ff8dbb1b566494f48f900493b5a8ec2b984e482249d0675c400bd55feac6f6e'
      },
      { id: 870,
        version: 2,
        height: 870,
        hash: 'ade13b19abe4bf6aea26d878ec534df8faff2d27f3b2e6ef7ae739b677153f57',
        transaction_count: 5,
        transactions: [
          {
            type: 'Miner',
            txid: 'b1f724dbe809e9952a79ac62012a061a926f6971719bbf7633f043503dbd1939',
            block_time: 1542683357
          }, {
            type: 'Invocation',
            txid: 'bb6e0b82b3dc8fc725a91b46c0ef187692e9565ab1dea939142f6461f1551ce2',
            block_time: 1542683357
          }, {
            type: 'Contract',
            txid: 'aa5996f291632cf0dacdc6b5694fbda5be3dac292ff4ead4627ddc6b66151ccc',
            block_time: 1542683357
          }
        ],
        size: 100,
        script: {
          verification: null,
          invocation: '8759D52937D82659E3E8768C877EFC1ABD4393BF34D5FD4DB2B2E50B2167B245',
          id: '480d3911-fe0e-48e9-b462-5f86e8dcd0e8'
        },
        time: 1542683358,
        producer: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        prev_block_hash: 'b830c68e077bd59f2cc11188d9b65e4217952b359f61636afd8f30a736f3f02d',
        merkle: '3ff8dbb1b566494f48f900493b5a8ec2b984e482249d0675c400bd55feac6f6e'
      },
      { id: 869,
        version: 2,
        height: 869,
        hash: 'b830c68e077bd59f2cc11188d9b65e4217952b359f61636afd8f30a736f3f02d',
        transaction_count: 5,
        transactions: [
          {
            type: 'Miner',
            txid: 'b1f724dbe809e9952a79ac62012a061a926f6971719bbf7633f043503dbd1939',
            block_time: 1542683357
          }, {
            type: 'Invocation',
            txid: 'bb6e0b82b3dc8fc725a91b46c0ef187692e9565ab1dea939142f6461f1551ce2',
            block_time: 1542683357
          }, {
            type: 'Contract',
            txid: 'aa5996f291632cf0dacdc6b5694fbda5be3dac292ff4ead4627ddc6b66151ccc',
            block_time: 1542683357
          }
        ],
        size: 100,
        script: {
          verification: null,
          invocation: '8759D52937D82659E3E8768C877EFC1ABD4393BF34D5FD4DB2B2E50B2167B245',
          id: '480d3911-fe0e-48e9-b462-5f86e8dcd0e8'
        },
        time: 1542683358,
        producer: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        prev_block_hash: 'def5950ee1a7435399eb762465afbbcb11295477aee98e748966520e6009e06f',
        merkle: '3ff8dbb1b566494f48f900493b5a8ec2b984e482249d0675c400bd55feac6f6e'
      },
      { id: 868,
        version: 2,
        height: 868,
        hash: 'def5950ee1a7435399eb762465afbbcb11295477aee98e748966520e6009e06f',
        transaction_count: 5,
        transactions: [
          {
            type: 'Miner',
            txid: 'b1f724dbe809e9952a79ac62012a061a926f6971719bbf7633f043503dbd1939',
            block_time: 1542683357
          }, {
            type: 'Invocation',
            txid: 'bb6e0b82b3dc8fc725a91b46c0ef187692e9565ab1dea939142f6461f1551ce2',
            block_time: 1542683357
          }, {
            type: 'Contract',
            txid: 'aa5996f291632cf0dacdc6b5694fbda5be3dac292ff4ead4627ddc6b66151ccc',
            block_time: 1542683357
          }
        ],
        size: 100,
        script: {
          verification: null,
          invocation: '8759D52937D82659E3E8768C877EFC1ABD4393BF34D5FD4DB2B2E50B2167B245',
          id: '480d3911-fe0e-48e9-b462-5f86e8dcd0e8'
        },
        time: 1542683358,
        producer: 'ANuupE2wgsHYi8VTqSUSoMsyxbJ8P3szu7',
        prev_block_hash: 'ff5b6ee62aeaaa09b9a6535ede44d2fb994769b4938c2b192d85a502c8207a52',
        merkle: '3ff8dbb1b566494f48f900493b5a8ec2b984e482249d0675c400bd55feac6f6e'
      }
    ];

    const txs = [
      {
        id: 101,
        txid: 'aca3a89f0e2a320ecc2d62f0e92adfb97884113cbf374c7669539f3792cf5291',
        version: '0',
        type: 'Invocation',
        size: 1002,
        hash: '1234',
        block_time: 1542683358,
        sys_fee: 10.2,
        net_fee: 5.3,
        block_height: 872,
        block_hash: '585b49f7d41c4dc33edad2ace751ca2bfc57b883daa3c56e148c6088a2539d41',
        script: {
          verification: '210202008015935b7c56e7af01559fb4fd5e05bb2713d91f25dd3dcac518fe006c1cac',
          verification_op: '0000: PUSHBYTES33 0x0202008015935b7c56e7af01559fb4fd5e05bb2713d91f25dd3dcac518fe006c1c 0034: CHECKSIG',
          invocation: '8759D52937D82659E3E8768C877EFC1ABD4393BF34D5FD4DB2B2E50B2167B245',
          invocation_op: '0000: PUSHBYTES64 0x98d7e7f62700df6c2730275e6caa36c7f982ad146662db31af4e7d4280a1a5e6e0b2a0f11822bbcbc14a6d8a1ff8a1230fb928b94e942c078252bd2934bcf59c',
          script: '0800e1f5050000000014c8e770ab770ea75017f606a21c4488de3613b13914fd8d0f84b8db897d6eebe3e0177ed5c5b47fc32253c1087472616e7366657267f9e6e770af783d809bd1a65e1bb5b6042953bcac',
          script_op: 'PUSHBYTES8 0x00e1f50500000000 PUSHBYTES20 0xc8e770ab770ea75017f606a21c4488de3613b139 PUSHBYTES20 0xfd8d0f84b8db897d6eebe3e0177ed5c5b47fc322 PUSH3 PACK PUSHBYTES8 0x7472616e73666572 APPCALL 0xacbc532904b6b51b5ea6d19b803d78af70e7e6f9'
        }
      },
      {
        id: 102,
        txid: 'aca3a89f0e2a320ecc2d62f0e92adfb97884113cbf374c7669539f3792cf5291',
        version: '0',
        type: 'Invocation',
        size: 1002,
        hash: '1234',
        block_time: 1542683358,
        sys_fee: 10.2,
        net_fee: 5.3,
        block_height: 872,
        block_hash: '585b49f7d41c4dc33edad2ace751ca2bfc57b883daa3c56e148c6088a2539d41',
        script: {
          verification: '210202008015935b7c56e7af01559fb4fd5e05bb2713d91f25dd3dcac518fe006c1cac',
          verification_op: '0000: PUSHBYTES33 0x0202008015935b7c56e7af01559fb4fd5e05bb2713d91f25dd3dcac518fe006c1c 0034: CHECKSIG',
          invocation: '8759D52937D82659E3E8768C877EFC1ABD4393BF34D5FD4DB2B2E50B2167B245',
          invocation_op: '0000: PUSHBYTES64 0x98d7e7f62700df6c2730275e6caa36c7f982ad146662db31af4e7d4280a1a5e6e0b2a0f11822bbcbc14a6d8a1ff8a1230fb928b94e942c078252bd2934bcf59c',
          script: '0800e1f5050000000014c8e770ab770ea75017f606a21c4488de3613b13914fd8d0f84b8db897d6eebe3e0177ed5c5b47fc32253c1087472616e7366657267f9e6e770af783d809bd1a65e1bb5b6042953bcac',
          script_op: 'PUSHBYTES8 0x00e1f50500000000 PUSHBYTES20 0xc8e770ab770ea75017f606a21c4488de3613b139 PUSHBYTES20 0xfd8d0f84b8db897d6eebe3e0177ed5c5b47fc322 PUSH3 PACK PUSHBYTES8 0x7472616e73666572 APPCALL 0xacbc532904b6b51b5ea6d19b803d78af70e7e6f9'
        }
      },
      {
        id: 103,
        txid: 'aca3a89f0e2a320ecc2d62f0e92adfb97884113cbf374c7669539f3792cf5291',
        version: '0',
        type: 'Invocation',
        size: 1002,
        hash: '1234',
        block_time: 1542683358,
        sys_fee: 10.2,
        net_fee: 5.3,
        block_height: 872,
        block_hash: '585b49f7d41c4dc33edad2ace751ca2bfc57b883daa3c56e148c6088a2539d41',
        script: {
          verification: '210202008015935b7c56e7af01559fb4fd5e05bb2713d91f25dd3dcac518fe006c1cac',
          verification_op: '0000: PUSHBYTES33 0x0202008015935b7c56e7af01559fb4fd5e05bb2713d91f25dd3dcac518fe006c1c 0034: CHECKSIG',
          invocation: '8759D52937D82659E3E8768C877EFC1ABD4393BF34D5FD4DB2B2E50B2167B245',
          invocation_op: '0000: PUSHBYTES64 0x98d7e7f62700df6c2730275e6caa36c7f982ad146662db31af4e7d4280a1a5e6e0b2a0f11822bbcbc14a6d8a1ff8a1230fb928b94e942c078252bd2934bcf59c',
          script: '0800e1f5050000000014c8e770ab770ea75017f606a21c4488de3613b13914fd8d0f84b8db897d6eebe3e0177ed5c5b47fc32253c1087472616e7366657267f9e6e770af783d809bd1a65e1bb5b6042953bcac',
          script_op: 'PUSHBYTES8 0x00e1f50500000000 PUSHBYTES20 0xc8e770ab770ea75017f606a21c4488de3613b139 PUSHBYTES20 0xfd8d0f84b8db897d6eebe3e0177ed5c5b47fc322 PUSH3 PACK PUSHBYTES8 0x7472616e73666572 APPCALL 0xacbc532904b6b51b5ea6d19b803d78af70e7e6f9'
        }
      },
      {
        id: 104,
        txid: 'aca3a89f0e2a320ecc2d62f0e92adfb97884113cbf374c7669539f3792cf5291',
        version: '0',
        type: 'Invocation',
        size: 1002,
        hash: '1234',
        block_time: 1542683358,
        sys_fee: 10.2,
        net_fee: 5.3,
        block_height: 872,
        block_hash: '585b49f7d41c4dc33edad2ace751ca2bfc57b883daa3c56e148c6088a2539d41',
        script: {
          verification: '210202008015935b7c56e7af01559fb4fd5e05bb2713d91f25dd3dcac518fe006c1cac',
          verification_op: '0000: PUSHBYTES33 0x0202008015935b7c56e7af01559fb4fd5e05bb2713d91f25dd3dcac518fe006c1c 0034: CHECKSIG',
          invocation: '8759D52937D82659E3E8768C877EFC1ABD4393BF34D5FD4DB2B2E50B2167B245',
          invocation_op: '0000: PUSHBYTES64 0x98d7e7f62700df6c2730275e6caa36c7f982ad146662db31af4e7d4280a1a5e6e0b2a0f11822bbcbc14a6d8a1ff8a1230fb928b94e942c078252bd2934bcf59c',
          script: '0800e1f5050000000014c8e770ab770ea75017f606a21c4488de3613b13914fd8d0f84b8db897d6eebe3e0177ed5c5b47fc32253c1087472616e7366657267f9e6e770af783d809bd1a65e1bb5b6042953bcac',
          script_op: 'PUSHBYTES8 0x00e1f50500000000 PUSHBYTES20 0xc8e770ab770ea75017f606a21c4488de3613b139 PUSHBYTES20 0xfd8d0f84b8db897d6eebe3e0177ed5c5b47fc322 PUSH3 PACK PUSHBYTES8 0x7472616e73666572 APPCALL 0xacbc532904b6b51b5ea6d19b803d78af70e7e6f9'
        }
      }
    ];

    const assets = [
      {
        id: 1,
        hash: '602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7',
        type: 'GoverningToken',
        symbol: 'XQC',
        name: 'XQC',
        amount: 10000000,
        issued: 90000000,
        precision: 5,
        owner: 'Abf2qMs1pzQb8kYk9RuxtUb9jtRKJVuBJt',
        block_time: 1542683358,
        address_count: 5,
        addresses: [
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          }
        ],
        transaction_count: 4,
        transactions: [
          {
            type: 'Miner',
            txid: 'b1f724dbe809e9952a79ac62012a061a926f6971719bbf7633f043503dbd1939',
            block_time: 1542683357
          }, {
            type: 'Invocation',
            txid: 'bb6e0b82b3dc8fc725a91b46c0ef187692e9565ab1dea939142f6461f1551ce2',
            block_time: 1542683357
          }, {
            type: 'Contract',
            txid: 'aa5996f291632cf0dacdc6b5694fbda5be3dac292ff4ead4627ddc6b66151ccc',
            block_time: 1542683357
          }
        ],
        transfers: [
          {
            txid: '65d00139de722db2c7ff956824031219d7d472110b17497d6aefc29fbd8af729',
            block_time: 1542683357,
            asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
            asset_symbol: 'XQG',
            amount: 5,
            address_from: 'Em4FP643TZYpqPaDM4sHzqya19zkYS2yzAcxUaDoS1VM',
            address_to: 'AifCpFXZzj7PnnbtjCj6xBG3WR3KoYdFcngv2BUCzwgf'
          }
        ]
      },
      {
        id: 2,
        hash: '602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7',
        type: 'GoverningToken',
        symbol: 'XQC',
        name: 'XQC',
        amount: 10000000,
        issued: 90000000,
        precision: 5,
        owner: 'Abf2qMs1pzQb8kYk9RuxtUb9jtRKJVuBJt',
        block_time: 1542683358,
        address_count: 5,
        addresses: [
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          },
          {
            address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
            block_time: 1542683358,
            last_block_time: 1542683358,
            transaction_count: 324,
            balance_amount: 7
          }
        ],
        transaction_count: 4,
        transactions: [
          {
            type: 'Miner',
            txid: 'b1f724dbe809e9952a79ac62012a061a926f6971719bbf7633f043503dbd1939',
            block_time: 1542683357
          }, {
            type: 'Invocation',
            txid: 'bb6e0b82b3dc8fc725a91b46c0ef187692e9565ab1dea939142f6461f1551ce2',
            block_time: 1542683357
          }, {
            type: 'Contract',
            txid: 'aa5996f291632cf0dacdc6b5694fbda5be3dac292ff4ead4627ddc6b66151ccc',
            block_time: 1542683357
          }
        ],
        transfers: [
          {
            txid: '65d00139de722db2c7ff956824031219d7d472110b17497d6aefc29fbd8af729',
            block_time: 1542683357,
            asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
            asset_symbol: 'XQG',
            amount: 5,
            address_from: 'Em4FP643TZYpqPaDM4sHzqya19zkYS2yzAcxUaDoS1VM',
            address_to: 'AifCpFXZzj7PnnbtjCj6xBG3WR3KoYdFcngv2BUCzwgf'
          }
        ]
      }
    ];

    const addresses = [
      {
        id: 1,
        address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
        block_time: 1542683358,
        last_block_time: 1542683358,
        balances: [
          {
            asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
            asset_symbol: 'XQG',
            amount: 5
          },
          {
            asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
            asset_symbol: 'XQG',
            amount: 5
          },
          {
            asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
            asset_symbol: 'XQG',
            amount: 5
          }
        ],
        unclaimed: {
          asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
          asset_symbol: 'XQG',
          amount: 5
        },
        transaction_count: 10,
        transactions: [
          {
            type: 'Miner',
            txid: 'b1f724dbe809e9952a79ac62012a061a926f6971719bbf7633f043503dbd1939',
            block_time: 1542683357
          }, {
            type: 'Invocation',
            txid: 'bb6e0b82b3dc8fc725a91b46c0ef187692e9565ab1dea939142f6461f1551ce2',
            block_time: 1542683357
          }, {
            type: 'Contract',
            txid: 'aa5996f291632cf0dacdc6b5694fbda5be3dac292ff4ead4627ddc6b66151ccc',
            block_time: 1542683357
          }
        ],
        transfer_count: 300,
        transfers: [
          {
            txid: '65d00139de722db2c7ff956824031219d7d472110b17497d6aefc29fbd8af729',
            block_time: 1542683357,
            asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
            asset_symbol: 'XQG',
            amount: 5,
            address_from: 'Em4FP643TZYpqPaDM4sHzqya19zkYS2yzAcxUaDoS1VM',
            address_to: 'AifCpFXZzj7PnnbtjCj6xBG3WR3KoYdFcngv2BUCzwgf'
          }, {
            txid: '65d00139de722db2c7ff956824031219d7d472110b17497d6aefc29fbd8af729',
            block_time: 1542683357,
            asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
            asset_symbol: 'XQG',
            amount: 5,
            address_from: 'Em4FP643TZYpqPaDM4sHzqya19zkYS2yzAcxUaDoS1VM',
            address_to: 'AifCpFXZzj7PnnbtjCj6xBG3WR3KoYdFcngv2BUCzwgf'
          }, {
            txid: '65d00139de722db2c7ff956824031219d7d472110b17497d6aefc29fbd8af729',
            block_time: 1542683357,
            asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
            asset_symbol: 'XQG',
            amount: 5,
            address_from: 'Em4FP643TZYpqPaDM4sHzqya19zkYS2yzAcxUaDoS1VM',
            address_to: 'AifCpFXZzj7PnnbtjCj6xBG3WR3KoYdFcngv2BUCzwgf'
          }
        ]
      },
      {
        id: 2,
        address: 'Abo5MykQe1DCh1nbVwnBYQzi86ZoApBWcp',
        block_time: 1542683358,
        last_block_time: 1542683358,
        balances: [
          {
            asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
            asset_symbol: 'XQG',
            amount: 5
          },
          {
            asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
            asset_symbol: 'XQG',
            amount: 5
          },
          {
            asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
            asset_symbol: 'XQG',
            amount: 5
          }
        ],
        unclaimed: {
          asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
          asset_symbol: 'XQG',
          amount: 5
        },
        transaction_count: 10,
        transactions: [
          {
            type: 'Miner',
            txid: 'b1f724dbe809e9952a79ac62012a061a926f6971719bbf7633f043503dbd1939',
            block_time: 1542683357
          }, {
            type: 'Invocation',
            txid: 'bb6e0b82b3dc8fc725a91b46c0ef187692e9565ab1dea939142f6461f1551ce2',
            block_time: 1542683357
          }, {
            type: 'Contract',
            txid: 'aa5996f291632cf0dacdc6b5694fbda5be3dac292ff4ead4627ddc6b66151ccc',
            block_time: 1542683357
          }
        ],
        transfer_count: 300,
        transfers: [
          {
            txid: '65d00139de722db2c7ff956824031219d7d472110b17497d6aefc29fbd8af729',
            block_time: 1542683357,
            asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
            asset_symbol: 'XQG',
            amount: 5,
            address_from: 'Em4FP643TZYpqPaDM4sHzqya19zkYS2yzAcxUaDoS1VM',
            address_to: 'AifCpFXZzj7PnnbtjCj6xBG3WR3KoYdFcngv2BUCzwgf'
          }, {
            txid: '65d00139de722db2c7ff956824031219d7d472110b17497d6aefc29fbd8af729',
            block_time: 1542683357,
            asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
            asset_symbol: 'XQG',
            amount: 5,
            address_from: 'Em4FP643TZYpqPaDM4sHzqya19zkYS2yzAcxUaDoS1VM',
            address_to: 'AifCpFXZzj7PnnbtjCj6xBG3WR3KoYdFcngv2BUCzwgf'
          }, {
            txid: '65d00139de722db2c7ff956824031219d7d472110b17497d6aefc29fbd8af729',
            block_time: 1542683357,
            asset_hash: '948adac0ec6fa054d47c667ba2a068f538019cf1d8b6a366755721a05f085818',
            asset_symbol: 'XQG',
            amount: 5,
            address_from: 'Em4FP643TZYpqPaDM4sHzqya19zkYS2yzAcxUaDoS1VM',
            address_to: 'AifCpFXZzj7PnnbtjCj6xBG3WR3KoYdFcngv2BUCzwgf'
          }
        ]
      }
    ];

    const nodes = [
      {
        id: 1,
        account: 'eoshuobipool',
        public_key: 'EOS5XKswW26cR5VQeDGwgNb5aixv1AMcKkdDNrC59KzNSBfnH6TR7',
        votes: 108340201,
        votes_percent: 2.08,
        url: 'http://eoshuobipool.com',
        position: 1,
        daily_reward: {
          asset_hash: 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
          asset_symbol: 'XQG',
          amount: 2
        }
      },
      {
        id: 2,
        account: 'eoshuobipool',
        public_key: 'EOS5XKswW26cR5VQeDGwgNb5aixv1AMcKkdDNrC59KzNSBfnH6TR7',
        votes: 108340201,
        votes_percent: 2.08,
        url: 'http://eoshuobipool.com',
        position: 1,
        daily_reward: {
          asset_hash: 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
          asset_symbol: 'XQG',
          amount: 2
        }
      },
      {
        id: 3,
        account: 'eoshuobipool',
        public_key: 'EOS5XKswW26cR5VQeDGwgNb5aixv1AMcKkdDNrC59KzNSBfnH6TR7',
        votes: 108340201,
        votes_percent: 2.08,
        url: 'http://eoshuobipool.com',
        position: 1,
        daily_reward: {
          asset_hash: 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
          asset_symbol: 'XQG',
          amount: 2
        }
      },
      {
        id: 4,
        account: 'eoshuobipool',
        public_key: 'EOS5XKswW26cR5VQeDGwgNb5aixv1AMcKkdDNrC59KzNSBfnH6TR7',
        votes: 108340201,
        votes_percent: 2.08,
        url: 'http://eoshuobipool.com',
        position: 1,
        daily_reward: {
          asset_hash: 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
          asset_symbol: 'XQG',
          amount: 2
        }
      }
    ];

    const status = {
      version: 2,
      last_block_height: 31723617,
      last_block_time: 1542683357
    };

    return {blocks, txs, assets, addresses, nodes, status};
  }

  genId(records: any[]): number {
    return records.length > 0 ? Math.max(...records.map(record => record.id)) + 1 : 10001;
  }
}
