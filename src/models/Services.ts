// https://en.bitcoin.it/wiki/Protocol_documentation#version
export enum SERVICE_BIT_NAME {
  NODE_NETWORK,
  NODE_GETUTXO,
  NODE_BLOOM,
  NODE_WITNESS,
  NODE_XTHIN,
  NODE_COMPACT_FILTERS,
  NODE_NETWORK_LIMITED,
}
export enum SERVICE_BIT_VALUE {
  NODE_NETWORK = 0, // This node can be asked for full blocks instead of just headers.
  NODE_GETUTXO = 1, // See BIP 0064
  NODE_BLOOM = 2, // See BIP 0111
  NODE_WITNESS = 3, // See BIP 0144
  NODE_XTHIN = 4, // Never formally proposed (as a BIP), and discontinued. Was historically sporadically seen on the network.
  NODE_COMPACT_FILTERS = 6, // See BIP 0157
  NODE_NETWORK_LIMITED = 10, // See BIP 0159
}

export const SERVICE_BITS = [
  { name: SERVICE_BIT_NAME.NODE_NETWORK, bit: SERVICE_BIT_VALUE.NODE_NETWORK },
  { name: SERVICE_BIT_NAME.NODE_GETUTXO, bit: SERVICE_BIT_VALUE.NODE_GETUTXO },
  { name: SERVICE_BIT_NAME.NODE_BLOOM, bit: SERVICE_BIT_VALUE.NODE_BLOOM },
  { name: SERVICE_BIT_NAME.NODE_WITNESS, bit: SERVICE_BIT_VALUE.NODE_WITNESS },
  { name: SERVICE_BIT_NAME.NODE_XTHIN, bit: SERVICE_BIT_VALUE.NODE_XTHIN },
  { name: SERVICE_BIT_NAME.NODE_COMPACT_FILTERS, bit: SERVICE_BIT_VALUE.NODE_COMPACT_FILTERS },
  { name: SERVICE_BIT_NAME.NODE_NETWORK_LIMITED, bit: SERVICE_BIT_VALUE.NODE_NETWORK_LIMITED },
];

export type Services = SERVICE_BIT_NAME[];
