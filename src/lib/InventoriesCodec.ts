import bitcodec from "@bitmatrix/bitcodec";

const _Inventory = bitcodec.Object([
  ["type", bitcodec.Number.Int32LE],
  ["hash", bitcodec.Buffer(32)],
]);
export const InventoriesCodec = bitcodec.VarArray(bitcodec.VarUIntBitcoin, _Inventory);
