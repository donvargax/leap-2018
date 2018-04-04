import { h, renderToString } from "ink";

import { Green } from "../lib/green";

import cosmiconfig = require("cosmiconfig")

const { config = {} } =
    cosmiconfig("uaas", {
        rcExtensions: true,
        sync: true
    }).load()

console.log("CONFIG", JSON.stringify(config))

process.stdout.write(
  renderToString(
    <Green>
      Hola<br />
    </Green>,
  ),
);
