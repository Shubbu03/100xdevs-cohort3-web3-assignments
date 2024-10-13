const crypto = require("crypto");

function findHashWithPrefix(prefix) {
  let input = Math.floor(Math.random() * 1000000);

  while (true) {
    const inputStr = input.toString();

    const hash = crypto.createHash("sha256").update(inputStr).digest("hex");

    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash };
    }

    input++;
  }
}

const result = findHashWithPrefix("00000");
console.log(`Input: ${result.input}`);
console.log(`Output Hash: ${result.hash}`);
f;
