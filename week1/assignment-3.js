const crypto = require("crypto");

// Function to find a nonce that, when appended to the input, produces a hash starting with '00000'
function findHashWithPrefix(prefix, baseInput) {
  let nonce = 0;
  while (true) {
    let inputStr = `${baseInput}${nonce}`;
    let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash, nonce: nonce };
    }
    nonce++;
  }
}

// Base input string
const baseInput = "harkirat => Raman | Rs 100 Ram => Ankit | Rs 101935085";

// Find and print the input string, hash, and nonce
const result = findHashWithPrefix("00000", baseInput);
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);
console.log(`Nonce: ${result.nonce}`);
