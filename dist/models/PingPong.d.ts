/// <reference types="node" />
import { MessageStructure } from "./MessageStructure";
export declare type PingPongPayload = {
    nonce: Buffer;
};
export interface PingPongMessage extends MessageStructure<PingPongPayload> {
}
