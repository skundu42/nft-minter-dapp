import { ethers } from "ethers";
import NFTMinter from "./Nft-Minter.json";
require('dotenv').config();

const address= process.env.CONTRACT_ADDRESS;

export async function connectWallet() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  // Insert deployed contract link here
  const contract = new ethers.Contract(address, NFTMinter.abi, signer);
  
  return { signer, contract };
  }
  
  