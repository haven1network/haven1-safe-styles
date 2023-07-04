# haven1-safe-styles

![license](https://img.shields.io/github/license/haven1network/haven1-safe-styles)

This repository contains a [@mui/material](https://material-ui.com/) theming and a set of useful React components written in TypeScript.

These components and theming are being used to build the [safe-haven1](https://github.com/haven1network/safe-haven1) web and desktop app.

## How to run locally
```bash
  npm i to install depencies
```

## How to install as npm package

### Yarn

```bash
   yarn add @haven1network/haven1-safe-styles
```

### npm

```bash
   npm install @haven1network/haven1-safe-styles
```

## Integration

This library makes use of [@mui/material - 5.x.x](https://material-ui.com/) as `peer dependency`, this means you must install it in your Safe App. Make sure to provide a compatible version as defined by peer dependencies.

Once everything is installed, you have to instantiate the SafeThemeProvider with the desired theme mode (light/dark) and with the generated safe theme return a [ThemeProvider](https://mui.com/material-ui/customization/theming/#theme-provider) for the application.

```js
import { ThemeProvider } from '@mui/material/styles';
import { SafeThemeProvider } from '@haven1network/haven1-safe-styles';

import App from './App';

export default () => (
  <SafeThemeProvider mode="light">
    {(safeTheme: Theme) => (
      <ThemeProvider theme={safeTheme}>
        <App />
      </ThemeProvider>
    )}
  </SafeThemeProvider>
);
```

## Using the components

You can import every component exported from `@haven1network/haven1-safe-styles` in the same way.

```js
import { EthHashInfo } from '@haven1network/haven1-safe-styles';

const App = (account) => {
  return <EthHashInfo address={account} showCopyButton />;
};

export default App;
```

## Adding the fonts

The fonts will be bundled on `build` and a `fonts.css` file will be provided as well for adding the corresponding `font-face` declarations

```
// from js/ts files
import '@haven1network/haven1-safe-styles/dist/fonts.css'

// from css files
@import url(<path-to-node_modules>/@haven1network/haven1-safe-styles/dist/fonts.css)
```
## Local development

To develop on your local machine, install the dependencies (including the peer dependencies):

```
yarn
```

Launch Storybook:

```
yarn storybook
```
