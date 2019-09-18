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

<!-- Definitions -->

[webcode]: https://i.ibb.co/2q8Y33j/web.png
[webresult]: https://i.ibb.co/8XTYXPx/Screen-Shot-2019-09-18-at-2-38-43-PM.png
[nativecode]: https://i.ibb.co/8bNk8Bt/native.png
[nativeresult]: https://i.ibb.co/cCXBxYY/Simulator-Screen-Shot-i-Phone-X-2019-09-18-at-15-29-25.png
