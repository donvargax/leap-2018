import { h, Text } from "ink";

import * as react from "react";

export interface IGreenProps {
  children: string | Array<string | Element>;
}

export const Green = ({ children }: IGreenProps) => (
  <Text green>{children}</Text>
);
