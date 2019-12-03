import React from 'react';
import {RenderHtml, Text, Flex, ComponentMap} from '@fabulas/astly';
import {one, two} from '@fabulas/themes';
import testHtml from '../src/testHtml';

import '../src/styles.scss';

const Index = () => {
  const [currentTheme, toggleTheme] = React.useState(false);
  const thisTheme = currentTheme === true ? one : two;

  console.log('Current Theme Overrides:', JSON.stringify(thisTheme, null, 2));

  return (
    <>
      <Flex
        bg={thisTheme.colors.primary}
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
