import { provider, signer } from "./common";

const getSuiForDev = async (address: string, amount: number) => {
  let curAmount = 0;
  while (curAmount <= amount) {
    await provider.requestSuiFromFaucet(address);
    await new Promise(resolve => setTimeout(() => resolve(null), 1000));
    curAmount += 0.05;
    console.log(`amount: ${curAmount}`);
  }
}

(async () => {
  const addr = await signer.getAddress();
  getSuiForDev(addr, 0.1);
})();
