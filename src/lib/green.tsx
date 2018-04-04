import {h, Text} from "ink"

export const Green = ({children}: {children: (string | (string | Element)[])}) =>
  <Text green>{children}</Text>;