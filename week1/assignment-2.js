const crypto = require("crypto");

function findHashWithPrefix2(prefix) {
  const input = 0;

  const inputStr = input.toString();
  const hash = crypto.createHash("sha256").update(inputStr).digest("hex");

  if (hash.startsWith(prefix)) {
    return { input: inputStr, hash: hash };
  }

  input++;
}

const result = findHashWithPrefix2("100xdevs");
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);
