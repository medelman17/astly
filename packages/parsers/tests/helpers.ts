import {render} from '@testing-library/react';
import React from 'react';
import {parseHtml} from '../lib';

export function renderHtml(html, options) {
  return new Promise((resolve, reject) => {
    parseHtml({components: {}, ...options}).process(html, async (err, file) => {
      if (err) {
        reject(err);
      }
      resolve(
        React.createElement('div', {key: 'whatever', role: 'top'}, [
          file.contents,
        ]),
      );
    });
  });
}

// re-export everything
export * from '@testing-library/react';
