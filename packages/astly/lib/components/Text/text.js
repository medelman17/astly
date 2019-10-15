import React from "react";
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from "styled-components-modifiers";
import { space, color, typography, compose } from "styled-system";
import { styled } from "../../styled";
import { isNative } from "../../helpers";
import { MODIFIER_CONFIG } from "./modifiers";

export function Text({ children, ...props }) {
  return <StyText {...props}>{children}</StyText>;
}

const styles = compose(
  color,
  typography,
  space
);

//
const StyText = styled[isNative ? "Text" : "p"]`
  ${styles}
  ${applyStyleModifiers(MODIFIER_CONFIG)}
`;

Text.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
};
