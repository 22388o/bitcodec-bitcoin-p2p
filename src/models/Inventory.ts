import { MessageStructure } from "./MessageStructure";

// https://en.bitcoin.it/wiki/Protocol_documentation#Inventory_Vectors
export type Inventory = {
  type: number;
  hash: string;
};

// https://en.bitcoin.it/wiki/Protocol_documentation#inv
export interface InvMessage extends MessageStructure<Inventory[]> {}
