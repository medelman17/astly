import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RenderTree } from "@fabulas/astly";

const testTree = `
  <div class="App" >
    <header minHeight="100vh" style="display: flex; justify-content: center; align-items: center; flex-direction: column;" bg="#282c34" minHeight="100vh" class="App-header">
     <img height="40vmin" src=${logo} source=${logo} class="App-logo" alt="logo"/>
     <p color="white">Edit src/App.js and save to reload.</p>
     <div>
      <a class="App-link" href="https://fabulas.io" color="white"><p>Fabulas Link</p></a>
      </div>
    </header>
   </div>`;

function App() {
  return <RenderTree tree={testTree} />;
}

export default App;
