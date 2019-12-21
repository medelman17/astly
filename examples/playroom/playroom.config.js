const path = require('path');
const fileLoader = require('file-loader');

const exampleCode = `const [toggler, toggleTheme] = React.useState(true);
const [htmlToRender, setHtml] = React.useState(null);

const { one, two } = useTheme();

const currentTheme = toggler === true ? one : two;

React.useEffect(() => {
  async function getHtml() {
    const { html } = await fetch(
      "https://playroom.edelman215.now.sh/api/get-html"
    ).then(html => html.json());
    setHtml(html);
  }
  getHtml();
}, []);

<>
  <Button
    bg={currentTheme.colors.primary}
    onClick={() => toggleTheme(!toggler)}
  >
    <Text color="white">Toggle Theme</Text>
  </Button>
  <Flex variant="col">
    <Box>
      <RenderHtml html={htmlToRender} theme={currentTheme} />
    </Box>
    <Box>
      <pre>{htmlToRender}</pre>
    </Box>
  </Flex>
</>`;

module.exports = {
  components: './src/components.ts',
  outputPath: './public',

  // Optional:
  title: 'Astly',
  frameComponent: './src/Frame.tsx',
  // themes: './src/themes',
  widths: [375, 500],
  port: 9000,
  openBrowser: false,
  typeDeclarations: ['@astly/components/**/*.d.ts'],
  webpackConfig: () => ({
    // Custom webpack config goes here...
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    externals: {
      'react-native': 'react-native',
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-transform-modules-commonjs',
                '@babel/plugin-proposal-nullish-coalescing-operator',
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',

            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-transform-modules-commonjs',
                '@babel/plugin-proposal-nullish-coalescing-operator',
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
        //   {
        //     test: /\.tsx?$/,
        //     use: ['babel-loader', 'awesome-typescript-loader'],
        //   },
      ],
    },
  }),
};
