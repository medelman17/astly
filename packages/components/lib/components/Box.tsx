import * as React from "react";
import styled from "styled-components";
import isNative from "../helpers/executionEnvironment";

function Box(props) {
  return <StyledBox {...props} />;
}

const StyledBox = styled[isNative ? "View" : "div"]``;

export default Box;
