import { IBitcodec } from "@bitmatrix/bitcodec";
declare class _BooleanCodec implements IBitcodec<boolean> {
    private byteCodec;
    encodeBytes: number;
    decodeBytes: number;
    encodingLength: (t?: any) => number;
    encode: (value: boolean, buffer?: Buffer | undefined, offset?: number | undefined) => Buffer;
    decode: (buffer: Buffer, offset?: number | undefined, end?: number | undefined) => boolean;
}
export declare const BooleanCodec: _BooleanCodec;
export {};
