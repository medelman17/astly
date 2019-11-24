import Box from "../components/Box";
import Text from "../components/Text";
import Script from "../components/Script";
import { withProps } from "./withProps";

export default {
  div: Box,
  p: Text,
  h1: withProps(Text, { variant: "h1" }),
  h2: withProps(Text, { variant: "h2" }),
  h3: withProps(Text, { variant: "h3" }),
  h4: withProps(Text, { variant: "h4" }),
  h5: withProps(Text, { variant: "h5" }),
  head: Box,
  body: Box,
  html: Box,
  //   a: Touchable,
  //   img: Media,
  script: Script
};
