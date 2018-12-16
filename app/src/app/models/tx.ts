export class Tx {

    public readonly id: string;
    public readonly size: number;
    public readonly type: string;
    public readonly version: number;
    public readonly attribute: string;
    public readonly vin: string;
    public readonly vout: string;
    public readonly sys_fee: number;
    public readonly net_fee: number;
    public readonly scripts: number;
    public readonly none: number;
    public readonly block_id: number;
    public readonly block_time: number;
}
