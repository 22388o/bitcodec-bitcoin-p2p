import { MessageStructureCodec } from "../src";
import { datas } from "./data/message_header";

datas.forEach((data, index) => {
  test("message_header decode index:" + index, () => {
    const result = MessageStructureCodec.decode(data.hex);
    expect(result).toEqual(data.raw);
  });

  test("message_header encode index:" + index, () => {
    const result = MessageStructureCodec.encode(data.raw);
    expect(result).toEqual(data.hex);
  });
});
