import React from "react";
import TableRow from "./TableRow";

import { styled } from "../styled";

function TableBody({ children, ...props }) {
  return (
    <TableRow variant="body" {...props}>
      {children}
    </TableRow>
  );
}

export default TableBody;
