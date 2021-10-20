import bitcodec, { IBitcodec } from "@bitmatrix/bitcodec";

export class MessageCommandCodec implements IBitcodec<string> {
  private buffer12 = bitcodec.Buffer(12);

  encodeBytes: number;
  decodeBytes: number;
  encodingLength: (t?: string | undefined) => number;

  constructor() {
    this.encodeBytes = this.buffer12.encodeBytes;
    this.decodeBytes = this.buffer12.decodeBytes;
    this.encodingLength = this.buffer12.encodingLength;
  }

  encode = (value: string, buffer?: Buffer, offset?: number): Buffer => {
    const bvalue = Buffer.from(value, "ascii");
    const nvalue = Buffer.alloc(12);
    bvalue.copy(nvalue, 0);
    for (let i = bvalue.length; i < nvalue.length; ++i) nvalue[i] = 0;
    return this.buffer12.encode(nvalue, buffer, offset);
  };

  decode = (buffer: Buffer, offset?: number, end?: number): string => {
    const bvalue = this.buffer12.decode(buffer, offset, end);

    let stop;
    for (stop = 0; bvalue[stop] !== 0; ++stop) {
      if (stop === 11) {
        throw Error("Non-terminated string. Are you sure this is a Bitcoin packet?");
      }
    }

    for (let i = stop; i < bvalue.length; ++i) {
      if (bvalue[i] !== 0) {
        throw Error("Found a non-null byte after the first null byte in a null-padded string");
      }
    }
    return bvalue.slice(0, stop).toString("ascii");
  };
}
