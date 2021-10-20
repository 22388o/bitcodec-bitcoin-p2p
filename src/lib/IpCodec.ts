import * as ip from "ip";
import { IBitcodec } from "@bitmatrix/bitcodec";

export class IpCodec implements IBitcodec<string> {
  private IPV4_PREFIX = Buffer.from("00000000000000000000ffff", "hex");
  encodeBytes: number = 16;
  decodeBytes: number = 16;
  encodingLength = (t?: any) => 16;

  encode = (value: string, buffer?: Buffer | undefined, offset?: number | undefined): Buffer => {
    if (!buffer) buffer = Buffer.alloc(16);
    if (!offset) offset = 0;
    if (offset + 16 > buffer.length) throw new RangeError("destination buffer is too small");

    if (ip.isV4Format(value)) {
      this.IPV4_PREFIX.copy(buffer, offset);
      ip.toBuffer(value, buffer, offset + 12);
    } else if (ip.isV6Format(value)) {
      ip.toBuffer(value, buffer, offset);
    } else {
      throw Error("Invalid IP address value");
    }

    return buffer;
  };

  decode = (buffer: Buffer, offset?: number | undefined, end?: number | undefined): string => {
    if (!offset) offset = 0;
    if (!end) end = buffer.length;
    if (offset + 16 > end) throw new RangeError("not enough data for decode");

    let start = buffer.slice(offset, offset + 12).equals(this.IPV4_PREFIX) ? 12 : 0;
    return ip.toString(buffer.slice(offset + start, offset + 16));
  };
}
