import React from 'react';
import TableRow from './TableRow';

function TableBody({children, ...props}) {
  return (
    <TableRow variant="body" {...props}>
      {children}
    </TableRow>
  );
}

export default TableBody;
