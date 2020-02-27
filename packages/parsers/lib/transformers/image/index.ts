import {correctSource} from './correctSource';
import {getMediaType} from './getMediaType';
import {AstlyParserOptions} from '../../types';

const handlers = [getMediaType, correctSource];

function handleImages(props: AstlyParserOptions) {
  return {
    plugins: handlers.map(handler => [handler, props]),
    settings: props,
  };
}

export {correctSource, handleImages};
