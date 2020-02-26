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
  components: '@astly/components',
  outputPath: './public',

  // Optional:
  title: 'Astly',
  frameComponent: './src/Frame.js',
  // themes: './src/themes',
  widths: [375, 500],
  port: 9000,
  openBrowser: false,
  typeScriptFiles: ['src/components/**/*.{ts,tsx}', '!**/node_modules'],
};
