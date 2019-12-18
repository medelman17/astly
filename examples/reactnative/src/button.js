import React from 'react';
import {Text, Flex} from '@fabulas/astly';

function Button({theme, onPress, children}) {
  return (
    <Flex
      border={2}
      bg={theme.colors.primary}
      py="3"
      my="2"
      alignItems="center"
      justifyContet="center">
      <Text color="white" onPress={onPress}>
        {children}
      </Text>
    </Flex>
  );
}

export default Button;
