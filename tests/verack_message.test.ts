import { buffer2hex, hex2buffer } from "@bitmatrix/bitcodec";
import { MessageStructureCodec } from "../src";
import { datas } from "./data/verack_message";

datas.forEach((data, index) => {
  test("verack_message decode index:" + index, () => {
    const verackBuffer = MessageStructureCodec.decode(data.hex);
    const verack = buffer2hex(verackBuffer);
    expect(verack).toEqual(data.raw);
  });

  test("verack_message encode index:" + index, () => {
    const verackHex = MessageStructureCodec.encode(hex2buffer(data.raw));
    expect(verackHex).toEqual(data.hex);
  });
});
