import React from 'react';
import {render, screen, renderHtml} from './helpers';

const mockHtml = `<div key="h" role="ip">This is implicit paragraph text</div>`;

describe('handling implicit paragraphs in Text transformations', () => {
  test('it does not wrap if not supplied the correct config ', async () => {
    const Component = (await renderHtml(mockHtml, {
      text: {wrapImplicitParagraphs: false},
    })) as React.ReactElement;
    render(Component);
    const testDiv = screen.queryByRole('ip', {});
    expect(testDiv.firstChild.nodeName).toEqual('#text');
  });

  test('it wraps when configured to do so', async () => {
    const Component = (await renderHtml(mockHtml, {
      text: {wrapImplicitParagraphs: true},
    })) as React.ReactElement;
    render(Component);
    const testDiv = screen.queryByRole('ip', {});
    expect(testDiv.firstChild).toBeTruthy();
    expect(testDiv.firstChild.nodeName).toEqual('SPAN');
  });

  test('it wraps with the right element when configured', async () => {
    const Component = (await renderHtml(mockHtml, {
      text: {wrapImplicitParagraphs: true, wrapImplicitParagraphsWith: 'p'},
    })) as React.ReactElement;
    render(Component);
    const testDiv = screen.queryByRole('ip', {});
    expect(testDiv.firstChild).toBeTruthy();
    expect(testDiv.firstChild.nodeName).toEqual('P');
  });
});
