const { ethers } = require("ethers");

//create new wallet
const wallet = ethers.Wallet.createRandom();

//generate new publicKey(address) and privateKey from it
const publicKey = wallet.address;
const privateKey = wallet.privateKey;

console.log("Public key::", publicKey);
console.log("Private key::", privateKey);

const message = "hello for ethers";

//sign the msg
const signature = wallet.signMessage(message);
console.log("Signature:", signature);

//verify the msg
const recoveredAddress = ethers.verifyMessage(message, signature);

console.log("Recovered Address:", recoveredAddress);
console.log("Signature is valid:", recoveredAddress === publicKey);
