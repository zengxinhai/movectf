import { signer, provider } from "./common";
const pkgId = process.env.pkg_id;

const getFlag = async () => {
  // const address = await signer.getAddress();
  // await provider.requestSuiFromFaucet(address);
  const moveCallTxn = await signer.executeMoveCallWithRequestType({
    packageObjectId: pkgId,
    module: 'checkin',
    function: 'get_flag',
    typeArguments: [],
    arguments: [],
    gasBudget: 10000,
  });
  console.log('moveCallTxn', moveCallTxn);
}

getFlag();