import { MessageStructure } from "./MessageStructure";
import { NetworkAddressVersion } from "./NetworkAddress";

// https://en.bitcoin.it/wiki/Protocol_documentation#version
export type Version = {
  version: number;
  services: Buffer;
  timestamp: number;
  addrRecv: NetworkAddressVersion;
  addrFrom: NetworkAddressVersion;
  nonce: Buffer;
  userAgent: string;
  startHeight: number;
  relay: boolean;
};

export interface VersionMessage extends MessageStructure<Version> {}
