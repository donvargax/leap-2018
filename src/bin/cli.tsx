import { h, renderToString } from "ink";

import { Green } from "../lib/green";

process.stdout.write(
  renderToString(
    <Green>
      Hola<br />
    </Green>,
  ),
);
