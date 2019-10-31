const readline = require('readline');
const fs = require('fs');

const newArray = [];
const args = process.argv.slice(2);

readline.createInterface({ input: fs.createReadStream(args[0]), output: null, console: false })
  .on('line', x => newArray.push(x.trim()))
  .on('close', () => {
    fs.writeFileSync(args[1], JSON.stringify(newArray));
    console.log(`Saved to ${args[1]}`);
  });
