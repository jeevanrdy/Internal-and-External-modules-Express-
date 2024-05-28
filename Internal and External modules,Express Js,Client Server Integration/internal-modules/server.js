let os = require("node:os");
let path = require("node:path");

console.log(os.platform());
console.log(os.version());
console.log(os.totalmem() / 1024 / 1024 / 1024);
console.log(os.freemem() / 1024 / 1024);

console.log(
  path.parse(
    "https://www.apple.com/v/macbook-air/s/images/overview/design/color/design_top_midnight__fvf2p6124tqq_large_2x.jpg"
  )
);
