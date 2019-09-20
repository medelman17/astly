# 🌲 🌲 Astly 🌲 🌲

Astly is a VERY EARLY STAGE javascript library for rendering static content (e.g., html) into react components that work on web and native. It's also a primitive UI library that could be used to build custom, platform-agnostic components. Powered by the [`Unified`](https://github.com/unifiedjs/unified) ecosystem, [`Styled Components`](https://github.com/styled-components/styled-components), [`Styled System`](https://github.com/styled-system/styled-system), and [`React`](https://github.com/facebook/react).

You write something like:

```
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import tree from './htmlForest'

function App() {
    return <RenderTree tree={tree} />
}

// where tree is soemthing like:

const testTree = `<div class="App" ><header minHeight="100vh" style="display: flex; justify-content: center; align-items: center; flex-direction: column;" bg="#282c34" minHeight="100vh" class="App-header"><img height="40vmin" src=${logo} source=${logo} class="App-logo" alt="logo"/><p color="white">Edit src/App.js and save to reload.</p><div><a class="App-link" href="https://fabulas.io" color="white"><p>Fabulas Link</p></a></div></headerclass="App-header"></div>`;

```

You get something like:

| Web                    | Native                    |
| :--------------------- | :------------------------ |
| ![web view][webresult] | ![web view][nativeresult] |
|                        |                           |

Give it try [here](https://codesandbox.io/s/astly-demo-p6l39)

## Installation

Use `npm` or `yarn` to install astly.

`npm install @fabulas/astly --save`

or

`yarn add @fabulas/astly`

## Astly: The Syntax-Tree Bits

Right now, Astly provides limited parsing support for html out of the box. It works like this:

(1) you give Astly's `RenderTree` component an html string; and

(2) Astly'll will parse that html into a `syntax-tree` turn it into react that is render-appropriate for the web and native.

It might look something like this:

```jsx
import React from "react";
import { RenderTree } from "@fabulas/astly";

function App() {
  const [tree, setTree] = React.useState(null);
  React.useEffect(() => {
    async function getTree() {
      const newTree = await fetch("/giveMeTree").then(tree => tree.json());
      setTree(newTree);
    }
    getTree();
  }, []);
  return <RenderTree tree={tree} />;
}

export default App;
```

We're not quite there yet.

> Indeed, ideally, this would only be the beginning. The [Unified](https://github.com/unifiedjs/unified) ecosystem provides an interface for processing text using syntax trees that just so happens to [play very nicely](https://itnext.io/parse-react-components-with-babel-and-visualize-them-45062046cb72) with react. This is what we use to get the job done. So, sky's really the limit.

### RenderTree

```
import { RenderTree } from '@fabulas/astly`

const tree = `<div><p>Hello World</p></div>`

function App() {
    return <RenderTree tree={tree} />
}

export default App;
```

Astly also exposes complete control over the tree transformation process, allowing you to override each and every one of its default choices if you would like. 😞 And it lets you inspect and or transform the results (react elements) before they are rendered.

See below for examples; prop tables coming soon.

## Astly: The UI Primitives Bits

Astly also exposes the react primitives that it uses under the hood, which should allow you to write custom, platform-agnostic components as far as you can compose them.

### Composable

Under the hood Astly uses [`styled-components`](https://www.styled-components.com/), [`styled-system`](https://styled-system.com/), and [`styled-components-modifiers`](https://github.com/Decisiv/styled-components-modifiers) to create a base of platform agnostic primitives that are theme-ready, backwards compatible, and highly composable.

For example:

```
import { Box, Text, styled } from '@fabulas/astly`;

const MyOrangeRedBox = styled(Box)`
    background-color: orangered;
`

export default function Tile(props) {
    return <MyOrangeRedBox><Text>Hello!</Text></MyOrangeRedBox>
}
```

### Flexible

Astly implements `styled-system`, which provides a set of well-engineered, unified style props 'for rapid UI development' that work for both humans and machines. There are too many potential options to cover here; however, suffice it to say, where there is a will there is a way with styled-system. You can find a reference table [here](https://styled-system.com/table).

Some 'canonical' examples might include:

```

<Text as="h1" color="white" bg="black" fontFamily="system-ui">
  This is a header!
</Text>

<Box width="100%" px={4} py={2}>
  <Text>
    React Native Don't Like it When You Render Text Outside a Text Component
  </Text>
</Box>;

```

Astly also provides limited support for `modifiers` (e.g., `strike`,`underline`, etc.); so, the following would work too.

```
<Text as="h1" modifiers=['strike', 'bold'] color="white" bg="black">This is a header!</Text>
```

> Because styled-system works with just about any CSS-in-JS library out of the box, we should be able decouple `styled-components` and or provide support for alternate dependency injection in the future.

### Customizable

While Astly exposes a set of primitive components that should work for most applications, you are free to provide your own overrides by utilizing the `componentMap` prop on `RenderTree`, which takes an object that links tree-generated tags with the components that should be used for that datatype.

For example:

```
<RenderTree
    tree={tree}
    componentMap={{
        img: BetterImageComponent,
        'whatever': (props) => <GreatComponent {...props} />
    }}
/>
```

Astly also expose another, soon-to-be-renamed prop on `RenderTree` called `inspectNewChildren`...that allows for last-minute transformation and or manipulation of what `RenderTree` wants to render. You could think of it as a render-prop. See [here](https://reactjs.org/docs/react-api.html) for likely use cases.

## Roadmap

- **Decouple parsing bits from rendering bits.** `RenderTree` should not be concerned with parsing. Ideally, this would be taken care of somewhere outside of the browser/device--i.e., on the backend. But, for present purposes and to ease eventual migration, we should continue to support parsing in the browser via `MakeTree` or something.
- **More Coming Soon...**

<!-- Definitions -->

[webcode]: https://i.ibb.co/2q8Y33j/web.png
[webresult]: https://i.ibb.co/8XTYXPx/Screen-Shot-2019-09-18-at-2-38-43-PM.png
[nativecode]: https://i.ibb.co/8bNk8Bt/native.png
[nativeresult]: https://i.ibb.co/cCXBxYY/Simulator-Screen-Shot-i-Phone-X-2019-09-18-at-15-29-25.png
