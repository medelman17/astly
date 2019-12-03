const path = require('path');
const fileLoader = require('file-loader');

const exampleCode = `<Flex>
<Box bg="primary">
  <Text color="white" variant="h1" style={{}}>
    Module X Preview
  </Text>
</Box>
<Box>
<Text variant="h2">Buttons</Text>
</Box>
<Box>
  <Button variant="primary">
    <Text variant="body" color="white">
      Test
    </Text>
  </Button>
</Box>
<Box>
  <Button variant="secondary">
    <Text variant="body">Test</Text>
  </Button>
</Box>
<Box>
  <Button variant="tertiary">
    <Text variant="body">Test</Text>
  </Button>
</Box>
<Box>
  <Button variant="cautionary">
    <Text variant="body">Test</Text>
  </Button>
</Box>

<Box>
  <Text variant="body">
    Fanny pack unicorn pickled readymade tote bag celiac tousled cloud bread
    ennui. Taxidermy hella master cleanse, pabst brunch intelligentsia
    fashion axe ennui offal authentic leggings meh lumbersexual. Bespoke
    tilde enamel pin, authentic tousled tumeric chicharrones semiotics
    cornhole raclette tacos roof party. Portland wayfarers green juice
    tacos. Celiac food truck glossier put a bird on it. Heirloom coloring
    book paleo wolf, fam green juice jianbing ramps chicharrones kogi tofu.
    Four dollar toast deep v snackwave enamel pin trust fund jean shorts.
  </Text>
</Box>
</Flex>`;

module.exports = {
  components: './src/components',
  outputPath: './dist',

  // Optional:
  title: 'My Awesome Library',
  frameComponent: './src/Frame.js',
  themes: './src/themes',
  widths: [320, 375, 768, 1024],
  port: 9000,
  openBrowser: false,
  exampleCode,
  webpackConfig: () => ({
    // Custom webpack config goes here...
    resolve: {
      // extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        react: path.resolve('../../node_modules/react'),
      },
    },
    externals: {
      'react-native': 'react-native',
    },

    module: {
      rules: [
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
