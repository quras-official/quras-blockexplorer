export class Block {

    public readonly id: number;
    public readonly size: number;
    public readonly version: number;
    public readonly hash: number;
    public readonly time: number;
    public readonly transaction_count: number;
    public readonly producer: string;
    public readonly previous: string;
    public readonly merkle: string;
}
