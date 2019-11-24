import Box from "../components/Box";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Script from "../components/Script";
import { withProps } from "./withProps";

export default {
  div: Box,
  p: withProps(Text, { variant: "body" }),
  h1: withProps(Text, { variant: "h1" }),
  h2: withProps(Text, { variant: "h2" }),
  h3: withProps(Text, { variant: "h3" }),
  h4: withProps(Text, { variant: "h4" }),
  h5: withProps(Text, { variant: "h5" }),
  span: withProps(Text, { variant: "body" }),
  em: withProps(Text, { variant: "body", modifier: "italic" }),
  u: withProps(Text, { variant: "body", modifier: "underlined" }),
  sup: withProps(Text, { variant: "superscript" }),
  sub: withProps(Text, { variant: "subscript" }),
  strong: withProps(Text, { variant: "body", modifier: "bold" }),
  b: withProps(Text, { variant: "body", modifier: "bold" }),
  strike: withProps(Text, { variant: "body", modifier: "strike" }),
  head: withProps(Box, {}),
  body: Box,
  html: Box,
  row: withProps(Flex, { variant: "row" }),
  col: withProps(Flex, { variant: "col" }),
  //   a: Touchable,
  //   img: Media,
  script: Script
};
