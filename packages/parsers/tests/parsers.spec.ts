import React from 'react';
import {render, screen} from './helpers';
import mockHtml from './mockdata';
import {renderHtml} from './helpers';

describe('handling typical html elements', () => {
  beforeAll(async () => {
    const Component = (await renderHtml(mockHtml, {})) as React.ReactElement;
    render(Component);
  });
  test('it handles css classes ', async () => {
    const myDiv = screen.queryByRole('div');
    expect(myDiv.classList).toContain('red');
    expect(myDiv.classList).toContain('center');
  });
});
