import { buffer2hex, hex2buffer } from "@bitmatrix/bitcodec";
import { MessageStructure, MessageStructureCodec, VersionCodec } from "../src";
import { datas } from "./data/version_message";

datas.forEach((data, index) => {
  test("version_message decode index:" + index, () => {
    const versionMessageBuffer = MessageStructureCodec.decode(data.hex);
    const version = hex2buffer(versionMessageBuffer.payload);
    const versionBuffer = VersionCodec.decode(version);
    expect(buffer2hex(versionBuffer)).toEqual(buffer2hex(data.raw.payload));
  });

  test("version_message encode index:" + index, () => {
    const versionBuffer = VersionCodec.encode(hex2buffer(data.raw.payload));
    const version: string = buffer2hex(versionBuffer);
    const headerAllData: MessageStructure<string> = {
      magic: data.raw.magic,
      command: data.raw.command,
      length: data.raw.length,
      checksum: data.raw.checksum,
      payload: version,
    };

    const versionMessageHex = MessageStructureCodec.encode(hex2buffer(headerAllData));
    expect(buffer2hex(versionMessageHex)).toEqual(data.hex);
  });
});
