import { h, Text } from "ink";

import * as react from "react";

export interface GreenProps {
  children: string | Array<string | Element>;
}

export const Green = ({ children }: GreenProps) => (
  <Text green>{children}</Text>
);
