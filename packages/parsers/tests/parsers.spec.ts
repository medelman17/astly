import React from 'react';
import {render, screen} from '@testing-library/react';
import mockHtml from './mockdata';
import {parseHtml} from '../lib/parseHtml';

function renderHtml(html) {
  return new Promise((resolve, reject) => {
    parseHtml({components: {}}).process(html, async (err, file) => {
      if (err) {
        reject(err);
      }
      resolve(React.createElement('div', {}, [file.contents]));
    });
  });
}

describe('handling typical html elements', () => {
  beforeAll(async () => {
    const Component = (await renderHtml(mockHtml)) as React.ReactElement;
    render(Component);
  });
  test('it handles css classes ', async () => {
    const myDiv = screen.queryByRole('div');
    expect(myDiv.classList).toContain('red');
    expect(myDiv.classList).toContain('center');
  });
});
