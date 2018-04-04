import { h, renderToString } from "ink"

import { Green } from "./green"

test('Should have Greeter available', () => {
  const result = renderToString(<Green>random</Green>)
  expect(result).toMatchSnapshot()
});
