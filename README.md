# Astly 🌲🌲

Astly is a VERY EARLY STAGE javascript library for rendering static content (e.g., html) into react components that work on web and native.

| Platform                                | Code                       | Result                    |
| :-------------------------------------- | :------------------------- | :------------------------ |
| [Web](https://i.ibb.co/2q8Y33j/web.png) | ![code sample][webcode]    | ![web view][webresult]    |
| React-Native                            | ![code sample][nativecode] | ![web view][nativeresult] |

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

## Why Astly?

### Composable

Under the hood we use [`styled-components`](https://www.styled-components.com/), [`styled-system`](https://styled-system.com/), and [`styled-components-modifiers`](https://github.com/Decisiv/styled-components-modifiers) to create a base of platform agnostic primitives that are theme-ready, backwards compatible, and highly composable.

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

To build our design system, we chose to implement `styled-system`, which provides a set of well-engineered, unified style props 'for rapid UI development' that work for both humans and machines.

There are too many potential options to cover here; however, suffice it to say, where there is a will there is a way with styled-system. You can find a reference table [here](https://styled-system.com/table).

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

We also support `modifiers` (e.g., `strike`,`underline`, etc.); so, the following would work too.

```
<Text as="h1" modifiers=['strike', 'bold'] color="white" bg="black">This is a header!</Text>
```

> Because styled-system works with just about any CSS-in-JS library out of the box, we should be able decouple `styled-components` and or provide support for alternate dependency injection in the future.

### Customizable

While we plan to expose a set of components that should work for most applications; however, you are free to provide your own overrides by utilizing the `componentMap` prop on `RenderTree`, which takes an object that links tree-generated tags with the components that should be used for that datatype.

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

<!-- Definitions -->

[webcode]: https://i.ibb.co/2q8Y33j/web.png
[webresult]: https://i.ibb.co/8XTYXPx/Screen-Shot-2019-09-18-at-2-38-43-PM.png
[nativecode]: https://i.ibb.co/8bNk8Bt/native.png
[nativeresult]: https://i.ibb.co/cCXBxYY/Simulator-Screen-Shot-i-Phone-X-2019-09-18-at-15-29-25.png
