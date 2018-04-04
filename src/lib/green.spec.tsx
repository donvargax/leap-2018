import { h, renderToString } from "ink";

import { Green } from "./green";

test("Should render green text", () => {
  const result = renderToString(<Green>random</Green>);
  expect(result).toMatchSnapshot();
});
