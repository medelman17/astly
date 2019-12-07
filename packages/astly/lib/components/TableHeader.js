import React from 'react';
import TableRow from './TableRow';

function TableHeader({children, ...props}) {
  const thisRow = React.useRef('header');
  return (
    <TableRow variant="header" ref={thisRow} {...props}>
      {children}
    </TableRow>
  );
}

export default TableHeader;
