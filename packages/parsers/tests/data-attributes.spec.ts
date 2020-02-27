import React from 'react';
import {render, screen, renderHtml} from './helpers';

const mockHtml = `<div role="test" data-whatever="someProps"><p data-thumb-pic="https://unsplash.com/photos/N4bjUOElScA/download?force=true">Nice!</p></div> `;

describe('handling data attributes in HTML5', () => {
  test('it does not inject data attributes by default', async () => {
    const Component = (await renderHtml(mockHtml, {})) as React.ReactElement;
    render(Component);
    const testDiv = screen.queryByRole('test', {});
    expect(testDiv.getAttributeNames()).not.toContain('data-whatever');
  });

  test('it does inject data attributes as props if configured', async () => {
    const Component = (await renderHtml(mockHtml, {
      html: {transformDataAttributesToProps: true},
    })) as React.ReactElement;
    render(Component);
    const testDiv = screen.queryByRole('test', {});
    expect(testDiv.getAttributeNames()).toContain('data-whatever');
  });

  test('it allows for whitelisting certain elements if configured', async () => {
    const Component = (await renderHtml(mockHtml, {
      html: {
        transformDataAttributesToProps: true,
        transformDataAttributesToPropsElements: ['p'],
      },
    })) as React.ReactElement;
    render(Component);
    const testDiv = screen.queryByRole('test', {});
    expect(testDiv.getAttributeNames()).not.toContain('data-whateer');
    expect(testDiv.children[0].getAttributeNames()).toContain('data-thumb-pic');
  });
});
