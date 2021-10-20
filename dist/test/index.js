// tx
tx_datas.forEach((data) => {
  // encode
  const obj = bitcoin.TxCodec.decode(data.hex);
  if (JSON.stringify(obj) !== JSON.stringify(data.raw)) console.error("tx decode error");

  // decode
  const hex = bitcoin.TxCodec.encode(data.raw);
  if (hex !== data.hex) console.error("tx encode error");
});

// block header
block_header_datas.forEach((data) => {
  // encode
  const obj = bitcoin.helper.buffer2hex(bitcoin.BlockHeaderCodec.decode(bitcoin.helper.hex2buffer(data.hex)));
  if (JSON.stringify(obj) !== JSON.stringify(data.raw)) console.error("block header decode error");

  // decode
  const hex = bitcoin.helper.buffer2hex(bitcoin.BlockHeaderCodec.encode(bitcoin.helper.hex2buffer(data.raw)));
  if (hex !== data.hex) console.error("block header encode error");
});
