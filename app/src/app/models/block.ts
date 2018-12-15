export class Block {

    public readonly height: number;
    public readonly size: number;
    public readonly version: number;
    public readonly hash: number;
    public readonly time: number;
    public readonly txCount: number;
    public readonly producer: string;
    public readonly previous: string;
    public readonly merkle: string;
}
