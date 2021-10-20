import { InvMessage, MAGIC } from "../../src";

type InvMessageData = {
  hex: string;
  raw: InvMessage;
};
export const datas: InvMessageData[] = [
  {
    hex: "f9beb4d9696e7600000000000000000049000000ec7d08c7020100000016b0440f82c8a11eb479ae98f764f077addcb043df2e65a71c6138d5cb4042ae0100000007292c6595ed3d806bce3783cc1043628369a67459d671245d4dad043a7ee075",
    raw: {
      magic: MAGIC.Mainnet,
      command: "inv",
      length: 73,
      checksum: "ec7d08c7",
      payload: [
        {
          type: 1,
          hash: "16b0440f82c8a11eb479ae98f764f077addcb043df2e65a71c6138d5cb4042ae",
        },
        {
          type: 1,
          hash: "07292c6595ed3d806bce3783cc1043628369a67459d671245d4dad043a7ee075",
        },
      ],
    },
  },
];
