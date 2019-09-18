import React from "react";
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from "styled-components-modifiers";
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
import { styled } from "../../styled";
import { isNative } from "../../helpers";
import { MODIFIER_CONFIG } from "./modifiers";

export function Box({ children, ...props }) {
  return <StyBox {...props}>{children}</StyBox>;
}

const styles = compose(
  space,
  layout,
  color,
  flexbox,
  border
  background
);

const StyBox = styled[isNative ? "View" : "div"]`
  ${styles}
  ${applyStyleModifiers(MODIFIER_CONFIG)}
`;

Box.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
};
