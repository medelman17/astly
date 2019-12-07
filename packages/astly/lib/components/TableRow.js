import React from 'react';
import Flex from '../components/Flex';

import styled from 'styled-components';
import {flexbox, compose, variant} from 'styled-system';
import Table from './Table';

function TableRow({children, forwardedRef, ...props}) {
  let isHeader = false;
  if (forwardedRef && forwardedRef !== null) {
    isHeader = forwardedRef.current === 'header';
  }

  return (
    <StyledTableRow isHeader={isHeader} {...props}>
      {children}
    </StyledTableRow>
  );
}

const StyledTableRow = styled(Flex)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-grow: 1;
  ${variant({
    scale: 'table.row',
    variants: {
      normal: {},
    },
  })}
`;

export default React.forwardRef((props, ref) => {
  return <TableRow forwardedRef={ref} {...props} />;
});

TableRow.defaultProps = {
  variant: 'normal',
};
