import { Block } from "@bitmatrix/bitcodec-bitcoin";
import { MessageStructure } from "./MessageStructure";

export interface BlockMessage extends MessageStructure<Block> {}
