export declare enum SERVICE_BIT_NAME {
    NODE_NETWORK = 0,
    NODE_GETUTXO = 1,
    NODE_BLOOM = 2,
    NODE_WITNESS = 3,
    NODE_XTHIN = 4,
    NODE_COMPACT_FILTERS = 5,
    NODE_NETWORK_LIMITED = 6
}
export declare enum SERVICE_BIT_VALUE {
    NODE_NETWORK = 0,
    NODE_GETUTXO = 1,
    NODE_BLOOM = 2,
    NODE_WITNESS = 3,
    NODE_XTHIN = 4,
    NODE_COMPACT_FILTERS = 6,
    NODE_NETWORK_LIMITED = 10
}
export declare const SERVICE_BITS: {
    name: SERVICE_BIT_NAME;
    bit: SERVICE_BIT_VALUE;
}[];
export declare type Services = SERVICE_BIT_NAME[];
