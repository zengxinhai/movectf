import { provider, signer } from "./common";

(async () => {
  const address = await signer.getAddress();
  await provider.requestSuiFromFaucet(address);
  console.log('Faucet done!');
})();
