/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Box as View, Text, styled, isNative} from '@fabulas/astly';

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

const App = () => {
  return (
    <Fragment>
      <View as={isNative ? SafeAreaView : 'div'}>
        <View
          bg="white"
          as={isNative ? ScrollView : 'div'}
          contentInsetAdjustmentBehavior="automatic">
          {/* <Header /> */}
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
