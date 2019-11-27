import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Text, RenderHtml, Flex} from '@fabulas/astly';

import testHtml from './testHtml';

import {t1, t2} from './themes';

const tools = {
  onClick(node) {
    alert(JSON.stringify(node, null, 2));
  },
  navigate(node) {
    alert(JSON.stringify(node, null, 2));
  },
};

const App = () => {
  const [currentTheme, toggleTheme] = React.useState(false);
  const thisTheme = currentTheme === true ? t1 : t2;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Flex
              bg={thisTheme.colors.primary}
              py="1"
              alignItems="center"
              justifyContet="center">
              <Text
                color="white"
                onPress={() => {
                  toggleTheme(!currentTheme);
                }}>
                Toggle Theme
              </Text>
            </Flex>
            {<RenderHtml html={testHtml} theme={thisTheme} tools={tools} />}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
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

export default App;
