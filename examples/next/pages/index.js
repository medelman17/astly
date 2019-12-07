import React from 'react';
import {RenderHtml, Text, Flex, ComponentMap, RenderTree} from '@fabulas/astly';
import {one, two} from '@fabulas/themes';
import testHtml from '../src/testHtml';

import '../src/styles.scss';

const Index = () => {
  const [currentTheme, toggleTheme] = React.useState(false);
  const thisTheme = currentTheme === true ? one : two;

  return (
    <>
      <Flex border={2}>Hi</Flex>
      <Flex
        bg={thisTheme.colors.primary}
        border={2}
        borderStyle="solid"
        py="1"
        flexGrow={1}
        variant="col"
        alignItems="center"
        justifyContent="center"
        style={{display: 'flex'}}
        onClick={() => {
          toggleTheme(!currentTheme);
        }}>
        <Text className="test" color="white">
          Toggle Theme
        </Text>
      </Flex>

      <RenderHtml html={testHtml} theme={thisTheme} />
    </>
  );
};

export default Index;
