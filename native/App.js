/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {
  Box as View,
  Text,
  styled,
  isNative,
  RenderTree,
  ComponentMap,
} from '@fabulas/astly';

const SectionContainer = styled(View)`
  background-color: blue;
  color: white;
  margin-top: 32px;
  padding: 0 24px;
`;

import {
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const testTree = `<div id="newRoot" style="display: flex; flex-direction: row; justify-content: space-around"><div bg="blue" color="white" width="25%" p="3"><p>Test</p></div><div bg="blue" width="25%" p="3" color="white"><p>Test</p></div><div bg="blue" color="white" width="25%" p="3"><p>Test</p></div><div bg="blue" color="white" width="25%" p="3"><p>Test</p></div></div>`;

const App = () => {
  return (
    <Fragment>
      <View as={isNative ? SafeAreaView : 'div'}>
        <View
          bg="white"
          as={isNative ? ScrollView : 'div'}
          contentInsetAdjustmentBehavior="automatic">
          {/* <Header /> */}
          <RenderTree tree={testTree} />
          <View bg="blue">
            <SectionContainer>
              <Text fontSize={24} fontWeight={600} color="white">
                Step One
              </Text>
              <Text color="white" mt={2} fontSize={18} fontWeight={400}>
                Edit <Text fontWeight={700}>App.js</Text> to change this screen
                and then come back to see your edits.
              </Text>
            </SectionContainer>
            <SectionContainer>
              <Text fontSize={24} fontWeight={600} color="white">
                See Your Changes
              </Text>
              <Text color="white" mt={2} fontSize={18} fontWeight={400}>
                <ReloadInstructions />
              </Text>
            </SectionContainer>
            <SectionContainer>
              <Text fontSize={24} fontWeight={600} color="white">
                Debug
              </Text>
              <Text color="white" mt={2} fontSize={18} fontWeight={400}>
                <DebugInstructions />
              </Text>
            </SectionContainer>
            <SectionContainer>
              <Text fontSize={24} fontWeight={600} color="white">
                Learn More
              </Text>
              <Text color="white" mt={2} fontSize={18} fontWeight={400}>
                Read the docs to discover what to do next:
              </Text>
            </SectionContainer>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default App;
