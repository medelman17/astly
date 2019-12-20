# 🌲 🌲 Astly 🌲 🌲

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

**Astly--an early stage, 'alpha' library--should not be used in production or elsewhere without reckless abandon; APIs are very much subject to change--everything is still be felt out, there is zero testing in place. That said, we think it's pretty neat.**

## Introduction

Astly translates markup language--e.g., html, css, and markdown--into `react` components that render appropriately and predictably across host environments--e.g., web and native. To accomplish the former, Astly relies on the `UnifiedJS` ecosystem to process text into syntax trees, run various transformations thereon, and, finally, compile said trees into react components. To accomplish the latter, Astly leverages a set of `styled-components`-based visual primitives that are 'host-environment-aware' and inject appropriate dependencies at runtime.

Astly's `<RenderHtml />` & `<RenderMarkdown />` components tie the above two steps together in one line of code, making Astly an end-to-end, 'no/low-code' solution for non-development-focused content creators--without any need to employ solutions like `WebViews`. For example, the following implementation is sufficient to render an entire screen/page 'in `react`' (_i.e._, Astly writes react for you) and can be written once and shared across platforms:

```jsx
import React from 'react';
import {RenderHtml} from '@fabulas/astly';

function RenderContent() {
   const [content, setContent] React.useState(null);
   React.useEffect(() => {
       async function getContent() {
           const html = await fetch(`https://somebackend.content`).then(res => res.text())
           setContent(html)
       }
       getContent()
   }, [])
   return <RenderHtml html={content} />
}
```

The rest of the magic happens under the hood. At the same time, Astly exposes various APIs to override its sensible defaults and/or hook into its process, providing flexibility and extensibility by allowing teams to opt-in to complexity as the need arises. Further, Astly exposes all of its UI primitives, any/all of which can be used outside of Astly's flagship components to write custom, host-agnostic code that can be immediately shared between teams, empowering developers to 'write-once, render anywhere,' too.

For example, consider a somewhat simplified representation of Astly's `Box` component:

```jsx
function Box(props) {
  return <StyledBox {...props} />;
}

const StyledBox = styled[isNative ? 'View' : 'div']``;
```

The above is sufficient to allow both Astly and developers leveraging its UI primitives to write code without regard to where such code will be executed. To achieve UI consistency and predictably across host-environments, Astly implements styled-system's constraint-based style props. For example, consider Astly's `<Text />` component:

```jsx
import React from react;
import {space, color, typography, variant, compose } from 'styled-system';
import styled from 'styled-components';

const styles = compose(color, typograhpy, space);

function Text(props) {
    return <StyledText {...props} />
}

const StyledText = styled[isNative ? 'Text' : 'span']`
    ${variant({
        // various variants described below...
    })}
    ${styles}
`;

export default Text;
```

As a result of the above, Astly is able to provide a multi-leveled, yet consistent and predictable api for styling, making Astly primitives a strong foundation for a host-environment agnostic design-system. Further, Astly implements a System UI Theme Specification-compliant theme-ing paradigm. And, as a part thereof, Astly primitives heavily rely on `Styled-System`'s variants api to make working with it as easily as possible for developers of all stripes.

All of Astly's `RenderWhatever` components accept a `theme` prop, which Astly will merge with and or override its default style-related choices/implementations. For example, if left alone, Astly will use `typographyjs` and `react-native-typography` to set system-appropriate/user-expected fonts, line-heights, weights, sizes, etc. Further, to provide locked-in vertical rhythm out of the box, Astly will apply styling variants based on the `tagName` (html) or `type` (markdown) of the element it encounters. Opt-ing out of a given choice is as simple as supplying a plain old javascript object to Astly's render components. Thus, where one were to want to change the default styling for level-one headings (i.e., `h1` in html; `heading`, depth 1 in markdown), one need only include a set of styles to apply instead at `theme.text.h1`.

## Installation

Use `npm` or `yarn` to install Astly and its peer dependencies. For example:

`yarn add @fabulas/astly @fabulas/themes styled-components react react-dom`

## Astly: The Markup to React Parts

Astly is currently able to work with various parts of Html, CSS, and Markdown--support for each is growing daily.

### HTML

Astly currently supports the below list of HTML tags.

| Layout                                                                  | Text/Other                                                                      |
| :---------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| div, head, body, html, row, col, table, thead, tbody, tr, td, th, style | p, span, h1, h2, h3, h4, h5, em, u, sup, sub, strong, b, strike, img, a, button |
|                                                                         |                                                                                 |

#### Component Map

Support can be extended or over-ridden via the `componentMap` prop available on both `RenderHtml` and `RenderMarkdown`. For example, consider the following examples:

```jsx
import React from 'react';
import {RenderHtml, ComponentMap} from '@fabulas/astly';
import CustomComponentForCustomTag from '../components';

function MyComponent({html}) {
    return <RenderHtml html={html} componentMap={{
        ...ComponentMap,
        div: (props) => <MyAwesomeBox {...props}>,
        customtag: CustomComponentForCustomTag
    }}>
}
```

Note: Attributes included on HTML elements that Astly parses will be supplied as `props` to the react components that Astly generates. As such, given that Astly uses the same UI primitives described above, HTML content authors may leverage all the power of styled-components and or styled-system's theme/styling-props. For example, the following are equivalent:

```html
<div bg="red">
  <p variant="body" color="white">Hello</p>
</div>
```

```jsx
<Box bg="red">
  <Text variant="body" color="white">
    Hello
  </Text>
</Box>
```

#### Style

On web, CSS provided to Astly (in the form of `<Style />` tags) is applied globally. As such, where markup is being served to Astly dynamically--i.e., via network request--and Astly lives alongside other content, authors are able to override existing classes, styles, etc., should the need arise. Astly's support for CSS in Style tags is more robust than that typically provided by the browser--see below re: how Astly leverages `postcss` to provide support for things like CSS variables, etc.

#### Script

On web, JavaScript provided to Astly (in the form of `<Script />` tags) will be executed globally--i.e., outside the scope of Astly's `RenderHtml` component--with full access to DOM APIs, providing a robust api for authors to inject third-party scripts and or perform wide-ranging DOM manipulation. In non-web environments, script tags are presently ignored.

### CSS

The following CSS will work as one would expect were it to be included in an external file and post-processed:

```html
<style>
  $astly: red;
  $rocks: blue;

  .red {
    background-color: $astly;
  }

  @media only screen and (min-device-width: 500px) {
    .red {
      background-color: $rocks;
    }
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<div class="red center">Hello</div>
```

Astly uses `postcss` under the hood to parse CSS. On web, where support for classes is provided by default, Astly leaves it to the browser to apply relevant rules. Thus, authors should be aware that class-naming conflict may arise. On native, where support is not provided, Astly scopes the provided rules and declaration to the components it renders.

### Markdown
