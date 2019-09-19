import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RenderTree } from "@fabulas/astly";

const navigate = node => {
  alert(JSON.stringify(node, null, 2));
  window.location.href = node.properties.href;
};

function App() {
  return <RenderTree tree={getTree()} tools={{ navigate }} />;
}

export default App;

function getTree() {
  return `
  <div class="App" >
    <header style="display: flex; justify-content: center; align-items: center; flex-direction: column;" bg="#282c34" minHeight="100vh" class="App-header">
     <img height="40vmin" src=${logo} source=${logo} class="App-logo" alt="logo"/>
     <p color="white">Edit src/App.js and save to reload.</p>
     <div>
      <a class="App-link" href="https://fabulas.io" color="white"><p>Fabulas Link</p></a>
      </div>
    </header>
   </div>`;
}
