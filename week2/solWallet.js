const { Keypair } = require("@solana/web3.js");
const nacl = require("tweetnacl");

//generate new keypair
const keypair = Keypair.generate();

//get publicKey and secretKey from the keypair
const publicKey = keypair.publicKey.toString();
const privateKey = keypair.secretKey;

console.log("Public key::", publicKey);
console.log("Private key::", privateKey);

//encode the msg
const msg = new TextEncoder().encode("hello world");
const msg2 = new TextEncoder().encode("hello world for 2");

//sign the msg
const signature = nacl.sign.detached(msg, privateKey);

//verify the result
const result = nacl.sign.detached.verify(
  msg,
  signature,
  keypair.publicKey.toBytes()
);

console.log(result);
