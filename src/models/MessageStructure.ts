import { MAGIC } from "./MAGIC";

// https://en.bitcoin.it/wiki/Protocol_documentation#Message_structure
export interface MessageStructure<T> {
  magic: MAGIC;
  command: string;
  length: number;
  checksum: string;
  payload: T;
}
