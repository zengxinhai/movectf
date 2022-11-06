import { signer } from "./common";
const heroId = '0x3d4265976d6f01770a691d2d3451e1c1eb98eba4';
const solutionId = '0x6d1bb2d0f751b9db9a677822d57c966cf2f9c625';

const farmBox = async () => {
  const moveCallTxn = await signer.executeMoveCallWithRequestType({
    packageObjectId: solutionId,
    module: 'solution',
    function: 'farm_box',
    typeArguments: [],
    arguments: [heroId],
    gasBudget: 1000000,
  });
  console.log('moveCallTxn', moveCallTxn);
}

farmBox();
