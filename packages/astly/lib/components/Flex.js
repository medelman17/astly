import React from "react";
import Box from "./Box";
import { styled, isNative } from "../styled";
import { flexbox, compose, variant } from "styled-system";

export default function Flex({ children, ...props }) {
  return <StyledFlex {...props}>{children}</StyledFlex>;
}

const styles = compose(flexbox);

const StyledFlex = styled(Box)`
  ${variant({
    scale: "box",
    variants: {
      normal: {}
    }
  })}
  ${styles}
`;

Flex.defaultProps = {
  variant: isNative ? "column" : "row"
};
