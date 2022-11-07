import { signer } from "./common";
const resouceId = '0x8e56a7705afa4733409718cc6c7eda17a6159c63';
const solutionId = '0x01d4e53288e425bf9c36831055f9d9f6c33ee678';

const getFlag = async () => {
  const moveCallTxn = await signer.executeMoveCallWithRequestType({
    packageObjectId: solutionId,
    module: 'solution',
    function: 'get_flag',
    typeArguments: [],
    arguments: [resouceId],
    gasBudget: 1000000,
  });
  console.log('moveCallTxn', moveCallTxn);
}

getFlag();
