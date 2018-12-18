export class Asset {
    public readonly hash: string;
    public readonly type: string;
    public readonly symbol: string;
    public readonly name: string;
    public readonly amount: number;
    public readonly issued: number;
    public readonly precision: number;
    public readonly owner: string;
    public readonly block_time: number;
    public readonly transaction_count: number;
    public readonly transactions: any[];
    public readonly address_count: number;
    public readonly addresses: any[];
    public readonly transfer_count: number;
    public readonly transfers: any[];
}
