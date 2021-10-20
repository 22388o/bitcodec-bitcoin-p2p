import { VerackMessage, MAGIC } from "../../src";

type VerackMessageData = {
  hex: string;
  raw: VerackMessage;
};
export const datas: VerackMessageData[] = [
  {
    hex: "f9beb4d976657261636b000000000000000000005df6e0e2",
    raw: {
      magic: MAGIC.Mainnet,
      command: "verack",
      length: 0,
      checksum: "5df6e0e2",
      payload: "",
    },
  },
];
