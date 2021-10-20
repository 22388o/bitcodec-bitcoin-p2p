import { BlockHeader } from "@bitmatrix/bitcodec-bitcoin";
import { MessageStructure } from "./MessageStructure";

export interface BlockHeadersMessage extends MessageStructure<BlockHeader[]> {}
