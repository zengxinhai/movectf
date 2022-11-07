import { signer } from "./common";
const resouceId = '0x8e56a7705afa4733409718cc6c7eda17a6159c63';
const solutionId = '0x16b4495736ae82e2e0d387835c3089dadcfb0dc3';

const data1 = [1,2,3,4];
const data2 = [1,2,3,4,5,6,7,8,9];

const getFlag = async () => {
  const moveCallTxn = await signer.executeMoveCallWithRequestType({
    packageObjectId: solutionId,
    module: 'solution',
    function: 'get_flag',
    typeArguments: [],
    arguments: [data1, data2, resouceId],
    gasBudget: 1000000,
  });
  console.log('moveCallTxn', moveCallTxn);
}

getFlag();
