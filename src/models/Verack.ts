import { MessageStructure } from "./MessageStructure";

// https://en.bitcoin.it/wiki/Protocol_documentation#verack
export interface VerackMessage extends MessageStructure<string> {}
