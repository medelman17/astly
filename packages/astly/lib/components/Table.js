import React from "react";
import Flex from "../components/Flex";
import { styled } from "../styled";
import { variant } from "styled-system";

class Table extends React.PureComponent {
  render() {
    const { children, ...props } = this.props;
    return <StyledTable {...props}>{this.props.children}</StyledTable>;
  }
}

const StyledTable = styled(Flex)`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${variant({
    scale: "table",
    variants: {
      normal: {}
    }
  })}
`;

Table.defaultProps = {
  variant: "outlined"
};

export default Table;

Table.Cell = TableCell;

function TableCell({ children, ...props }) {
  return <StyledTableCell {...props}>{children}</StyledTableCell>;
}

const StyledTableCell = styled(Flex)`
  ${variant({
    scale: "table.cell",
    variants: {
      normal: {
        color: "black"
      }
    }
  })}
`;
