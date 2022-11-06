import { signer } from "./common";
const heroId = '0x7f8d767663252ca4756fa4d7122bb5450f006f9d';
const solutionId = '0x9fd671e2598d3b47e488386952b8e6fe14d9c2e1';

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
const getFlag = async () => {
  const moveCallTxn = await signer.executeMoveCallWithRequestType({
    packageObjectId: solutionId,
    module: 'solution',
    function: 'get_flag',
    typeArguments: [],
    arguments: ['0x347fc1d89b11021c24b814bd9f3cd5ae489d9f63'],
    gasBudget: 1000000,
  });
  console.log('moveCallTxn', moveCallTxn);
}

(async () => {
  let i = 0;
  while (i <= 300) {
    await farmBox();
    i += 1;
  }
})();

// (async () => {
//   let i = 0;
//   while (i <= 100) {
//     await getFlag();
//     i += 1;
//   }
// })();
