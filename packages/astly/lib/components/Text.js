import React from "react";
import { space, color, compose, typography, variant } from "styled-system";
import { styled } from "../styled";
import { isNative } from "../helpers";

export default function Text({ children, ...props }) {
  return <StyledText {...props}>{children}</StyledText>;
}

const styles = compose(color, typography, space);

const StyledText = styled[isNative ? "Text" : "p"]`
  ${styles}
`;
