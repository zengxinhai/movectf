import { signer } from "./signer";
// Generate a new Keypair
const callModule = async () => {
  const moveCallTxn = await signer.executeMoveCallWithRequestType({
    packageObjectId: '0x72f71306430504a3f84b1b1d02eb364273980c02',
    module: 'sample',
    function: 'get_flag',
    typeArguments: [],
    arguments: [],
    gasBudget: 10000,
  });
  console.log('moveCallTxn', moveCallTxn);
}

callModule();
