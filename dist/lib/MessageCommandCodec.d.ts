import { IBitcodec } from "@bitmatrix/bitcodec";
export declare class MessageCommandCodec implements IBitcodec<string> {
    private buffer12;
    encodeBytes: number;
    decodeBytes: number;
    encodingLength: (t?: string | undefined) => number;
    constructor();
    encode: (value: string, buffer?: Buffer | undefined, offset?: number | undefined) => Buffer;
    decode: (buffer: Buffer, offset?: number | undefined, end?: number | undefined) => string;
}
