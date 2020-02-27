import {dataAttributesToProps} from './dataAttributesToProps';
import {AstlyParserOptions} from 'lib/types';

const handlers = [dataAttributesToProps];

function handleMisc(props: AstlyParserOptions) {
  const options = getMiscTransformOptions(props);
  console.log(props, options);
  return {
    plugins: handlers.map(handler => [handler, options]),
    settings: options,
  };
}

export {handleMisc, dataAttributesToProps};

const defaultHtmlTransformOptions = {
  transformDataAttributesToProps: false,
};

function getMiscTransformOptions({html, ...options}: AstlyParserOptions) {
  return {
    ...options,
    html: {
      ...defaultHtmlTransformOptions,
      ...html,
    },
  };
}
