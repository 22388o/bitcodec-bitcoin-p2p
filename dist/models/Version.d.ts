/// <reference types="node" />
import { MessageStructure } from "./MessageStructure";
import { NetworkAddressVersion } from "./NetworkAddress";
export declare type Version = {
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
export interface VersionMessage extends MessageStructure<Version> {
}
