import bitcodec from "@bitmatrix/bitcodec";
import { BooleanCodec } from "./BooleanCodec";
import { IpCodec } from "./IpCodec";

const addr = bitcodec.Object([
  ["services", bitcodec.Buffer(8)],
  ["ip", new IpCodec()],
  ["port", bitcodec.Number.UInt16BE],
]);

export const VersionCodec = bitcodec.Object([
  ["version", bitcodec.Number.Int32LE],
  ["services", bitcodec.Buffer(8)],
  ["timestamp", bitcodec.Number.Int64LE],
  ["addrRecv", addr],
  ["addrFrom", addr],
  ["nonce", bitcodec.Buffer(8)],
  ["userAgent", bitcodec.VarString(bitcodec.VarUIntBitcoin, "ascii")],
  ["startHeight", bitcodec.Number.Int32LE],
  ["relay", BooleanCodec],
]);
