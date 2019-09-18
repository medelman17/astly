# Astly 🌲🌲

Astly is a VERY EARLY STAGE javascript library for rendering static content (e.g., html) into react components that work on web and native.

Example: https://astly.fabulas.now.sh/

## Installation

Use `npm` or `yarn` to install astly.

`npm install @fabulas/astly --save`

or

`yarn add @fabulas/astly`

## Usage

### RenderTree

```
import { RenderTree } from '@fabulas/astly`

const tree = `<div><p>Hello World</p></div>`

function App() {
    return <RenderTree tree={tree} />
}

export default App;
```
