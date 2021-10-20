import { MAGIC } from "./MAGIC";
export interface MessageStructure<T> {
    magic: MAGIC;
    command: string;
    length: number;
    checksum: string;
    payload: T;
}
