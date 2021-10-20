// https://en.bitcoin.it/wiki/Protocol_documentation#Network_address
export type NetworkAddressVersion = {
  services: Buffer;
  ip: string;
  port: number;
};

export type NetworkAddress = {
  time: number;
  services: Buffer;
  ip: string;
  port: number;
};
