import { provider, signer } from "./common";

(async () => {
  const addr = await signer.getAddress();
  const balances = await provider.getAllBalances(addr);
  console.log(balances)
})();
