import React from 'react';
import {Image} from 'react-native';
import {Box as View, Text, RenderTree, ComponentMap} from '@fabulas/astly';
import logo from './react.png';

const testTree = `<div class="App" flexGrow="1"><header style="display: flex; justify-content: center; align-items: center; flex-direction: column; min-height: 100%" bg="#282c34" minHeight="100vh" class="App-header"><img height="40vmin" src=${logo} source=${logo} class="App-logo" alt="logo"/><p color="white">Edit src/App.js and save to reload.</p><div><a class="App-link" href="https://fabulas.io" color="white"><p>Fabulas Link</p></a></div></headerclass="App-header"></div>`;

const App = () => {
  return (
    <RenderTree
      tree={testTree}
      componentMap={{
        ...ComponentMap,
        img: Image,
        a: Text,
        header: View,
      }}
    />
  );
  s;
};

export default App;
