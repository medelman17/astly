import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Box} from '@fabulas/astly';
import {one, two} from '@fabulas/themes';
import Button from './src/button';
import {Provider} from './src/apollo';
import Renderer from './src/renderer';

const App = () => {
  const [themeToggler, toggleTheme] = React.useState(false);
  const currentTheme = themeToggler ? one : two;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Box style={styles.body}>
            <Button
              onPress={() => toggleTheme(!themeToggler)}
              theme={currentTheme}>
              Toggle Theme
            </Button>
            {<Renderer theme={currentTheme} />}
          </Box>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default () => (
  <Provider>
    <App />
  </Provider>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
