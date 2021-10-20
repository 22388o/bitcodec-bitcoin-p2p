import { MessageStructure } from "../models/MessageStructure";
export declare const MessageStructureCodec: {
    decode: (hex: string) => MessageStructure<string>;
    encode: (obj: MessageStructure<string>) => string;
};
