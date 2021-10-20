import { VersionMessage, MAGIC } from "../../src";

type VersionMessageData = {
  hex: string;
  raw: VersionMessage;
};
export const datas: VersionMessageData[] = [
  {
    hex: "f9beb4d976657273696f6e00000000006600000097302af5801101000904000000000000e577646100000000000000000000000000000000000000000000ffff1fdf0364085e090400000000000000000000000000000000000000000000000072036dbc6d407f7f102f5361746f7368693a32322e302e302f26c00a0001",
    raw: {
      magic: MAGIC.Mainnet,
      command: "version",
      length: 102,
      checksum: "97302af5",
      payload: {
        version: 70016,
        services: Buffer.from("0904000000000000", "hex"),
        timestamp: 1633974245,
        addrRecv: {
          services: Buffer.from("0000000000000000", "hex"),
          ip: "31.223.3.100",
          port: 2142,
        },
        addrFrom: {
          services: Buffer.from("0904000000000000", "hex"),
          ip: "::",
          port: 0,
        },
        nonce: Buffer.from("72036dbc6d407f7f", "hex"),
        userAgent: "/Satoshi:22.0.0/",
        startHeight: 704550,
        relay: true,
      },
    },
  },
];
