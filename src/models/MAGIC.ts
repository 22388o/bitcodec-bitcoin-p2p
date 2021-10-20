// https://en.bitcoin.it/wiki/Protocol_documentation#Message_structure
export enum MAGIC {
  Mainnet = 0xd9b4bef9, // 3652501241
  Regtest = 0xdab5bffa, // 3669344250
  Testnet3 = 0x0709110b, // 118034699
  Signet = 0x40cf030a, // 1087308554 (default)
  Namecoin = 0xfeb4bef9, // 4273258233
}
