import bitcodec, { IBitcodec } from "@bitmatrix/bitcodec";

class _BooleanCodec implements IBitcodec<boolean> {
  private byteCodec = bitcodec.Number.UInt8;
  encodeBytes: number = 1;
  decodeBytes: number = 1;
  encodingLength = (t?: any) => 1;
  encode = (value: boolean, buffer?: Buffer, offset?: number): Buffer => this.byteCodec.encode(+!!value, buffer, offset);
  decode = (buffer: Buffer, offset?: number, end?: number): boolean => !!this.byteCodec.decode(buffer, offset, end);
}

export const BooleanCodec = new _BooleanCodec();
