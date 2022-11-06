import { signer } from "./common";
const heroId = '0xd675d36a9cf8f16d9d46c90db3bbb63dced6afa2';
const solutionId = '0x21b2185353a1545639e2dc6ae2a933a6d416da09';

const boxId = '0x0b60d1c0aacb81dd16db7bf955023baad976f6f0';

const farmBox = async () => {
  const moveCallTxn = await signer.executeMoveCallWithRequestType({
    packageObjectId: solutionId,
    module: 'solution',
    function: 'farmForBox',
    typeArguments: [],
    arguments: [heroId],
    gasBudget: 1000000,
  });
  console.log('moveCallTxn', moveCallTxn);
}
const openBox = async () => {
  const moveCallTxn = await signer.executeMoveCallWithRequestType({
    packageObjectId: solutionId,
    module: 'solution',
    function: 'openBox',
    typeArguments: [],
    arguments: [boxId],
    gasBudget: 1000000,
  });
  console.log('moveCallTxn', moveCallTxn);
}

// farmBox();
openBox();
