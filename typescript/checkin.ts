import { signer } from "./common";
const pkgId = '0x825b48ffb829418e335a7e6e7549e9dfc371af99';

const getFlag = async () => {
  const moveCallTxn = await signer.executeMoveCallWithRequestType({
    packageObjectId: pkgId,
    module: 'checkin',
    function: 'get_flag',
    typeArguments: [],
    arguments: [],
    gasBudget: 1000000,
  });
  console.log('moveCallTxn', moveCallTxn);
}

getFlag();
