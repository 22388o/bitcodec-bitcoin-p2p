import { BlockMessage, MAGIC } from "../../src";

type BlockMessageData = {
  hex: string;
  raw: BlockMessage;
};

export const datas: BlockMessageData[] = [
  {
    hex: "f9beb4d9626c6f636b00000000000000bd03000056324b0b0100000050120119172a610421a6c3011dd330d9df07b63616c2cc1f1cd00200000000006657a9252aacd5c0b2940996ecff952228c3067cc38d4885efb5a4ac4247e9f337221b4d4c86041b0f2b57100401000000010000000000000000000000000000000000000000000000000000000000000000ffffffff08044c86041b020602ffffffff0100f2052a010000004341041b0e8c2567c12536aa13357b79a073dc4444acb83c4ec7a0e2f99dd7457516c5817242da796924ca4e99947d087fedf9ce467cb9f7c6287078f801df276fdf84ac000000000100000001032e38e9c0a84c6046d687d10556dcacc41d275ec55fc00779ac88fdf357a187000000008c493046022100c352d3dd993a981beba4a63ad15c209275ca9470abfcd57da93b58e4eb5dce82022100840792bc1f456062819f15d33ee7055cf7b5ee1af1ebcc6028d9cdb1c3af7748014104f46db5e9d61a9dc27b8d64ad23e7383a4e6ca164593c2527c038c0857eb67ee8e825dca65046b82c9331586c82e0fd1f633f25f87c161bc6f8a630121df2b3d3ffffffff0200e32321000000001976a914c398efa9c392ba6013c5e04ee729755ef7f58b3288ac000fe208010000001976a914948c765a6914d43f2a7ac177da2c2f6b52de3d7c88ac000000000100000001c33ebff2a709f13d9f9a7569ab16a32786af7d7e2de09265e41c61d078294ecf010000008a4730440220032d30df5ee6f57fa46cddb5eb8d0d9fe8de6b342d27942ae90a3231e0ba333e02203deee8060fdc70230a7f5b4ad7d7bc3e628cbe219a886b84269eaeb81e26b4fe014104ae31c31bf91278d99b8377a35bbce5b27d9fff15456839e919453fc7b3f721f0ba403ff96c9deeb680e5fd341c0fc3a7b90da4631ee39560639db462e9cb850fffffffff0240420f00000000001976a914b0dcbf97eabf4404e31d952477ce822dadbe7e1088acc060d211000000001976a9146b1281eec25ab4e1e0793ff4e08ab1abb3409cd988ac0000000001000000010b6072b386d4a773235237f64c1126ac3b240c84b917a3909ba1c43ded5f51f4000000008c493046022100bb1ad26df930a51cce110cf44f7a48c3c561fd977500b1ae5d6b6fd13d0b3f4a022100c5b42951acedff14abba2736fd574bdb465f3e6f8da12e2c5303954aca7f78f3014104a7135bfe824c97ecc01ec7d7e336185c81e2aa2c41ab175407c09484ce9694b44953fcb751206564a9c24dd094d42fdbfdd5aad3e063ce6af4cfaaea4ea14fbbffffffff0140420f00000000001976a91439aa3d569e06a1d7926dc4be1193c99bf2eb9ee088ac00000000",
    raw: {
      magic: MAGIC.Mainnet,
      command: "block",
      length: 957,
      checksum: "56324b0b",
      payload: {
        version: 1,
        prevBlock: "50120119172a610421a6c3011dd330d9df07b63616c2cc1f1cd0020000000000",
        merkleRoot: "6657a9252aacd5c0b2940996ecff952228c3067cc38d4885efb5a4ac4247e9f3",
        timestamp: 1293623863,
        bits: 453281356,
        nonce: 274148111,
        txns: [
          {
            version: 1,
            txIn: [
              {
                previousOutput: {
                  hash: "0000000000000000000000000000000000000000000000000000000000000000",
                  index: 4294967295,
                },
                signatureScript: "044c86041b020602",
                sequence: 4294967295,
              },
            ],
            txOut: [
              {
                value: 5000000000,
                pkScript: "41041b0e8c2567c12536aa13357b79a073dc4444acb83c4ec7a0e2f99dd7457516c5817242da796924ca4e99947d087fedf9ce467cb9f7c6287078f801df276fdf84ac",
              },
            ],
            lockTime: 0,
          },

          {
            version: 1,
            txIn: [
              {
                previousOutput: {
                  hash: "032e38e9c0a84c6046d687d10556dcacc41d275ec55fc00779ac88fdf357a187",
                  index: 0,
                },
                signatureScript:
                  "493046022100c352d3dd993a981beba4a63ad15c209275ca9470abfcd57da93b58e4eb5dce82022100840792bc1f456062819f15d33ee7055cf7b5ee1af1ebcc6028d9cdb1c3af7748014104f46db5e9d61a9dc27b8d64ad23e7383a4e6ca164593c2527c038c0857eb67ee8e825dca65046b82c9331586c82e0fd1f633f25f87c161bc6f8a630121df2b3d3",
                sequence: 4294967295,
              },
            ],
            txOut: [
              {
                value: 556000000,
                pkScript: "76a914c398efa9c392ba6013c5e04ee729755ef7f58b3288ac",
              },
              {
                value: 4444000000,
                pkScript: "76a914948c765a6914d43f2a7ac177da2c2f6b52de3d7c88ac",
              },
            ],
            lockTime: 0,
          },

          {
            version: 1,
            txIn: [
              {
                previousOutput: {
                  hash: "c33ebff2a709f13d9f9a7569ab16a32786af7d7e2de09265e41c61d078294ecf",
                  index: 1,
                },
                signatureScript:
                  "4730440220032d30df5ee6f57fa46cddb5eb8d0d9fe8de6b342d27942ae90a3231e0ba333e02203deee8060fdc70230a7f5b4ad7d7bc3e628cbe219a886b84269eaeb81e26b4fe014104ae31c31bf91278d99b8377a35bbce5b27d9fff15456839e919453fc7b3f721f0ba403ff96c9deeb680e5fd341c0fc3a7b90da4631ee39560639db462e9cb850f",
                sequence: 4294967295,
              },
            ],
            txOut: [
              {
                value: 1000000,
                pkScript: "76a914b0dcbf97eabf4404e31d952477ce822dadbe7e1088ac",
              },
              {
                value: 299000000,
                pkScript: "76a9146b1281eec25ab4e1e0793ff4e08ab1abb3409cd988ac",
              },
            ],
            lockTime: 0,
          },

          {
            version: 1,
            txIn: [
              {
                previousOutput: {
                  hash: "0b6072b386d4a773235237f64c1126ac3b240c84b917a3909ba1c43ded5f51f4",
                  index: 0,
                },
                signatureScript:
                  "493046022100bb1ad26df930a51cce110cf44f7a48c3c561fd977500b1ae5d6b6fd13d0b3f4a022100c5b42951acedff14abba2736fd574bdb465f3e6f8da12e2c5303954aca7f78f3014104a7135bfe824c97ecc01ec7d7e336185c81e2aa2c41ab175407c09484ce9694b44953fcb751206564a9c24dd094d42fdbfdd5aad3e063ce6af4cfaaea4ea14fbb",
                sequence: 4294967295,
              },
            ],
            txOut: [
              {
                value: 1000000,
                pkScript: "76a91439aa3d569e06a1d7926dc4be1193c99bf2eb9ee088ac",
              },
            ],
            lockTime: 0,
          },
        ],
      },
    },
  },
];
