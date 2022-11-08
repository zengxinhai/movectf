import { signer } from "./common";
const heroId = '0x23c615341a87e94ff9f63670ba2b5ed9f944defd';
const solutionId = '0xee4e0f2d5368c02c5f532e7051f70921cc8e320e';

const boxId = '0x2f78fe0e0f32381b2b1e4975156be410d830f177';

const farmBox = async () => {
  const moveCallTxn = await signer.executeMoveCallWithRequestType({
    packageObjectId: solutionId,
    module: 'game',
    function: 'farmForBox',
    typeArguments: [],
    arguments: [heroId, 5],
    gasBudget: 1000000,
  });
  console.log('moveCallTxn', moveCallTxn);
}
const openBox = async () => {
  const moveCallTxn = await signer.executeMoveCallWithRequestType({
    packageObjectId: solutionId,
    module: 'game',
    function: 'openBox',
    typeArguments: [],
    arguments: [boxId],
    gasBudget: 1000000,
  });
  console.log('moveCallTxn', moveCallTxn);
}

// farmBox();
openBox();
