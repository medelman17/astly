import React from "react";
import {
  space,
  color,
  layout,
  compose,
  flexbox,
  background,
  border,
  variant
} from "styled-system";
import { styled } from "../styled";
import { isNative } from "../helpers";

export default function Box({ children, ...props }) {
  return <StyledBox {...props}>{children}</StyledBox>;
}

const styles = compose(space, layout, color, flexbox, border, background);

const StyledBox = styled[isNative ? "View" : "div"]`
  ${styles}
`;
