export class Tx {
    public readonly txid: string;
    public readonly version: number;
    public readonly type: string;
    public readonly size: number;
    public readonly vouts: any[];
    public readonly vins: any[];
    public readonly block_time: number;
    public readonly sys_fee: number;
    public readonly net_fee: number;
    public readonly none: number;
    public readonly block_height: number;
    public readonly block_hash: string;
    public readonly script: any;
    public hasSpent: any;
}
