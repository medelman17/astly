'use strict';
import visit from 'unist-util-visit';
import {correctSource} from './correctSource';
import {getMediaType} from './getMediaType';
import {isNative} from '../../helpers';

const handlers = [getMediaType, correctSource];

function handleImages(props) {
  return {
    plugins: handlers.map(handler => [handler, props]),
    settings: props,
  };
}

export {correctSource, handleImages};
