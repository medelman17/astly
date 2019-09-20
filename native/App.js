import React from 'react';
import {Image} from 'react-native';
import {Box as View, Text, RenderTree, ComponentMap} from '@fabulas/astly';
import logo from './react.png';

const astlyBag = {
  navigate(node) {
    console.dir(node);
  },
};
const App = () => {
  return (
    <RenderTree
      tree={getTree()}
      tools={astlyBag}
      componentMap={{
        ...ComponentMap,

        header: View,
      }}
    />
  );
};

function getTree() {
  return `
  <div class="App" flexGrow="1">
    <header style="display: flex; justify-content: center; align-items: center; flex-direction: column; min-height: 100%" bg="#282c34" minHeight="100vh" class="App-header">
     <img height="40vmin" src=${logo}  class="App-logo" alt="logo"/>
     <p color="white">Edit src/App.js and save to reload.</p>
     <div>
      <a class="App-link" href="https://fabulas.io" color="white">Test</a>
      </div>
    </header>
   </div>`;
}

export default App;
