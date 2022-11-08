import dotenv from "dotenv";
import { Ed25519Keypair, JsonRpcProvider, RawSigner } from "@mysten/sui.js";
import { HexString } from "aptos";
dotenv.config();

const seed = process.env.seed;
const seedArr = new HexString(seed).toUint8Array();
const keypair = Ed25519Keypair.fromSeed(seedArr);
export const provider = new JsonRpcProvider();
export const signer = new RawSigner(keypair, provider);
console.log(signer.getAddress());