import React from "react";
import Flex from "./Flex";
import { styled, isNative } from "../styled";
import { flexbox, compose, variant } from "styled-system";

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

const styles = compose(flexbox);

const StyledButton = styled(Flex)`
  ${variant({
    scale: "buttons"
  })}
  ${styles}
`;

Button.defaultProps = {
  variant: "primary"
};
