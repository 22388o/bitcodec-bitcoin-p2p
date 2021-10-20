import { BlockHeadersMessage, MAGIC } from "../../src";

type BlockHeadersMessageData = {
  hex: string;
  raw: BlockHeadersMessage;
};

export const datas: BlockHeadersMessageData[] = [
  {
    hex: "f9beb4d9686561646572730000000000450100003d3370e50404e0ff2f7b8d134d1e1445a2df1c681374839e87dbf32658de570400000000000000000011ef2eb8d6c4b963eaeb8c1039eb946ab86c39649a9877662d6538fe70c93a2ff875656132260e1715bf98b60004006020b4ebbea3b7cef7c2f6fe3842d7187e8031168ccfde110e00000000000000000063a392ce675dd436b12b26724b3c31e6e1eeec1f663d9dfb732c713f4c71ab667f79656132260e175d60c5330004002020995f1bbecf662e4232b5da02922f35832a7492b357d101000000000000000000ad5032b9f680aedc1956e08be86381824011e2ed5aa459b992c7062be4cc354eca79656132260e1760a4663c0004000020de4d609e6ea7c76f7be83352e2e0cb3faae5bd3f819500000000000000000000007284c255c17e276aa2d1e7f42caddf89a197b8cb94e59a6bf1ebb0d129ea34b97a656132260e170d446a3200",
    raw: {
      magic: MAGIC.Mainnet,
      command: "headers",
      length: 325,
      checksum: "3d3370e5",
      payload: [
        {
          version: 805298180,
          prevBlock: "7b8d134d1e1445a2df1c681374839e87dbf32658de5704000000000000000000",
          merkleRoot: "11ef2eb8d6c4b963eaeb8c1039eb946ab86c39649a9877662d6538fe70c93a2f",
          timestamp: 1634039288,
          bits: 386803250,
          nonce: 3063463701,
          txnCount: 0,
        },
        {
          version: 543162372,
          prevBlock: "b4ebbea3b7cef7c2f6fe3842d7187e8031168ccfde110e000000000000000000",
          merkleRoot: "63a392ce675dd436b12b26724b3c31e6e1eeec1f663d9dfb732c713f4c71ab66",
          timestamp: 1634040191,
          bits: 386803250,
          nonce: 868573277,
          txnCount: 0,
        },
        {
          version: 538968068,
          prevBlock: "995f1bbecf662e4232b5da02922f35832a7492b357d101000000000000000000",
          merkleRoot: "ad5032b9f680aedc1956e08be86381824011e2ed5aa459b992c7062be4cc354e",
          timestamp: 1634040266,
          bits: 386803250,
          nonce: 1013359712,
          txnCount: 0,
        },
        {
          version: 536870916,
          prevBlock: "de4d609e6ea7c76f7be83352e2e0cb3faae5bd3f819500000000000000000000",
          merkleRoot: "007284c255c17e276aa2d1e7f42caddf89a197b8cb94e59a6bf1ebb0d129ea34",
          timestamp: 1634040505,
          bits: 386803250,
          nonce: 845825037,
          txnCount: 0,
        },
      ],
    },
  },
  {
    hex: "f9beb4d9686561646572730000000000520000003d3370e50100006020090f2f21c4b0e45d5bf9a73b2e71feccd44f12015669d84836000000000000009c44857133185f2f42a0fb78507b4805398b168bf698b133a10e35935bc09ad47d886861174443197e10d5dc05",
    raw: {
      magic: MAGIC.Mainnet,
      command: "headers",
      length: 82,
      checksum: "3d3370e5",
      payload: [
        {
          version: 543162368,
          prevBlock: "090f2f21c4b0e45d5bf9a73b2e71feccd44f12015669d8483600000000000000",
          merkleRoot: "9c44857133185f2f42a0fb78507b4805398b168bf698b133a10e35935bc09ad4",
          timestamp: 1634240637,
          bits: 423838743,
          nonce: 3704950910,
          txnCount: 5,
        },
      ],
    },
  },
];
