import { MessageStructureCodec } from "../src";
import { datas } from "./data/magic";

datas.forEach((data, index) => {
  test("magic decode index:" + index, () => {
    const result = MessageStructureCodec.decode(data.hex);
    expect(result).toEqual(data.raw);
  });

  test("magic encode index:" + index, () => {
    const result = MessageStructureCodec.encode(data.raw);
    expect(result).toEqual(data.hex);
  });
});
