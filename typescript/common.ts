import dotenv from "dotenv";
import { Ed25519Keypair, JsonRpcProvider, RawSigner, Connection } from "@mysten/sui.js";
dotenv.config();


const seed = process.env.seed;
const fullnodeUrl = process.env.fullnode;
const faucetUrl = process.env.faucet;
const seedArr = _getSeedFromBase64String(seed);
const keypair = Ed25519Keypair.fromSecretKey(seedArr);
const connection = new Connection({
  fullnode: fullnodeUrl,
  faucet: faucetUrl,
});
export const provider = new JsonRpcProvider(connection);
export const signer = new RawSigner(keypair, provider);
console.log('Active address ', signer.getAddress());

// Sui stores key like this:
// base64解析出33位数据
// 第0位代表加密类型
// 1到32位代表secret key
function _getSeedFromBase64String(b64: string) {
  return Uint8Array.prototype.slice.call(Buffer.from(b64, "base64"), 1);
}
