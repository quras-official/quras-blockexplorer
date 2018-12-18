export class Block {
    public readonly version: number;
    public readonly height: number;
    public readonly hash: string;
    public readonly transaction_count: number;
    public readonly transactions: any[];
    public readonly size: number;
    public readonly script: any;
    public readonly time: number;
    public readonly producer: string;
    public readonly prev_block_hash: string;
    public readonly merkle: string;
}
