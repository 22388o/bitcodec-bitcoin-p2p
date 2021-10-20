import { MessageStructure, MAGIC } from "../../src";

type MessageStructureData = {
  hex: string;
  raw: MessageStructure<string>;
};
export const datas: MessageStructureData[] = [
  {
    hex: "f9beb4d973656e646865616465727300000000005df6e0e2",
    raw: {
      magic: MAGIC.Mainnet,
      command: "sendheaders",
      length: 0,
      checksum: "5df6e0e2",
      payload: "",
    },
  },
  {
    hex: "fabfb5da73656e646865616465727300000000005df6e0e2",
    raw: {
      magic: MAGIC.Regtest,
      command: "sendheaders",
      length: 0,
      checksum: "5df6e0e2",
      payload: "",
    },
  },
  {
    hex: "0b11090773656e646865616465727300000000005df6e0e2",
    raw: {
      magic: MAGIC.Testnet3,
      command: "sendheaders",
      length: 0,
      checksum: "5df6e0e2",
      payload: "",
    },
  },
  {
    hex: "0a03cf4073656e646865616465727300000000005df6e0e2",
    raw: {
      magic: MAGIC.Signet,
      command: "sendheaders",
      length: 0,
      checksum: "5df6e0e2",
      payload: "",
    },
  },
  {
    hex: "f9beb4fe73656e646865616465727300000000005df6e0e2",
    raw: {
      magic: MAGIC.Namecoin,
      command: "sendheaders",
      length: 0,
      checksum: "5df6e0e2",
      payload: "",
    },
  },
];
