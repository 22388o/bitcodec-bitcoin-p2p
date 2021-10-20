import { buffer2hex, hex2buffer } from "@bitmatrix/bitcodec";
import { Block, BlockCodec } from "@bitmatrix/bitcodec-bitcoin";
import { MessageStructure, MessageStructureCodec } from "../src";
import { datas } from "./data/block_message";

datas.forEach((data, index) => {
  test("block_message decode index:" + index, () => {
    const headerAllData = MessageStructureCodec.decode(hex2buffer(data.hex));
    const result: Block = buffer2hex(BlockCodec.decode(hex2buffer(headerAllData.payload)));

    expect(headerAllData.checksum).toEqual(data.raw.checksum);
    expect(headerAllData.command).toEqual(data.raw.command);
    expect(headerAllData.length).toEqual(data.raw.length);
    expect(headerAllData.magic).toEqual(data.raw.magic);

    expect(result.version).toEqual(data.raw.payload.version);
    expect(result.prevBlock).toEqual(data.raw.payload.prevBlock);
    expect(result.merkleRoot).toEqual(data.raw.payload.merkleRoot);
    expect(result.bits).toEqual(data.raw.payload.bits);
    expect(result.nonce).toEqual(data.raw.payload.nonce);
    expect(result.timestamp).toEqual(data.raw.payload.timestamp);

    expect(result.txns[0].lockTime).toEqual(data.raw.payload.txns[0].lockTime);
    expect(result.txns[1].txIn[0].previousOutput).toEqual(data.raw.payload.txns[1].txIn[0].previousOutput);
    expect(result.txns[2].txIn[0].sequence).toEqual(data.raw.payload.txns[2].txIn[0].sequence);
    expect(result.txns[3].txIn[0].signatureScript).toEqual(data.raw.payload.txns[3].txIn[0].signatureScript);
    expect(result.txns[1].txOut[0].pkScript).toEqual(data.raw.payload.txns[1].txOut[0].pkScript);
    expect(result.txns[2].txOut[0].value).toEqual(data.raw.payload.txns[2].txOut[0].value);
  });

  test("block_message encode index:" + index, () => {
    const blockPayloadHex: string = buffer2hex(BlockCodec.encode(hex2buffer(data.raw.payload)));

    const blockMessageStructure: MessageStructure<string> = {
      magic: data.raw.magic,
      command: data.raw.command,
      length: data.raw.length,
      checksum: data.raw.checksum,
      payload: blockPayloadHex,
    };

    const blockMessageHex = MessageStructureCodec.encode(hex2buffer(blockMessageStructure));

    expect(blockMessageHex).toEqual(data.hex);
  });
});
