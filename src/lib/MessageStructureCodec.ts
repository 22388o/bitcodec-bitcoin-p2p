import bitcodec, { buffer2hex, hex2buffer } from "@bitmatrix/bitcodec";
import { MessageStructure } from "../models/MessageStructure";
import { MessageCommandCodec } from "./MessageCommandCodec";

const _MessageStructureCodec = bitcodec.Object([
  ["magic", bitcodec.Number.UInt32LE],
  ["command", new MessageCommandCodec()],
  ["length", bitcodec.Number.UInt32LE],
  ["checksum", bitcodec.Buffer(4)],
  ["payload", bitcodec.AllBuffer],
]);

export const MessageStructureCodec = {
  decode: (hex: string): MessageStructure<string> => {
    return buffer2hex(_MessageStructureCodec.decode(hex2buffer(hex)));
  },

  encode: (obj: MessageStructure<string>): string => {
    return buffer2hex(_MessageStructureCodec.encode(hex2buffer(obj)));
  },
};
