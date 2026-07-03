import { bundle } from "lightningcss";
import fs from "fs";

let result = bundle({
  filename: "css/main.css",
  minify: true,
});

fs.writeFileSync("dist/styles.css", result.code);