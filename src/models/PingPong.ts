import { MessageStructure } from "./MessageStructure";

// https://en.bitcoin.it/wiki/Protocol_documentation#ping
export type PingPongPayload = {
  nonce: Buffer;
};

export interface PingPongMessage extends MessageStructure<PingPongPayload> {}
