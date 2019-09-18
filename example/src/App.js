import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RenderTree } from "@fabulas/astly";

const testTree = `<div class="App"><header class="App-header"><img src=${logo} class="App-logo" alt="logo"/><p>Edit <code>src/App.js</code> and save to reload.</p><div><a class="App-link" href="https://fabulas.io">Fabulas Link</a></div></header></div>`;

function App() {
  return <RenderTree tree={testTree} />;
}

export default App;
