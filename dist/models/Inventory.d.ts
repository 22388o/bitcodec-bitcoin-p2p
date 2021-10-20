import { MessageStructure } from "./MessageStructure";
export declare type Inventory = {
    type: number;
    hash: string;
};
export interface InvMessage extends MessageStructure<Inventory[]> {
}
