import { signer } from "./common";
const lenderId = '0x58a8c51e67f13bcd764e83bc29f8f64decc42216';
const solutionId = '0x825b48ffb829418e335a7e6e7549e9dfc371af99';

const getFlag = async () => {
  const moveCallTxn = await signer.executeMoveCallWithRequestType({
    packageObjectId: solutionId,
    module: 'solution',
    function: 'get_flag',
    typeArguments: [],
    arguments: [lenderId],
    gasBudget: 1000000,
  });
  console.log('moveCallTxn', moveCallTxn);
}

getFlag();
