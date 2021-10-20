import { IBitcodec } from "@bitmatrix/bitcodec";
export declare class IpCodec implements IBitcodec<string> {
    private IPV4_PREFIX;
    encodeBytes: number;
    decodeBytes: number;
    encodingLength: (t?: any) => number;
    encode: (value: string, buffer?: Buffer | undefined, offset?: number | undefined) => Buffer;
    decode: (buffer: Buffer, offset?: number | undefined, end?: number | undefined) => string;
}
