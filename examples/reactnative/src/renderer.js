import React from 'react';
import {Flex, RenderHtml} from '@fabulas/astly';
import {useQuery} from '@apollo/react-hooks';
import {query} from './apollo';
import {RichText} from 'prismic-dom';

function RenderScreen({node, theme}) {
  const {title, description, content, _meta} = node;
  const body = RichText.asHtml(content);

  return (
    <Flex key={_meta.uid}>
      <RenderHtml html={RichText.asHtml(title)} theme={theme} />
      <RenderHtml html={RichText.asHtml(description)} theme={theme} />
      <RenderHtml html={body} theme={theme} />
    </Flex>
  );
}

function ScreenRenderer(props) {
  const {loading, error, data} = useQuery(query, {
    pollInterval: 250,
  });
  if (!data) {
    return null;
  }
  return data
    ? data.allPages.edges.map(({node}) => (
        <RenderScreen key={node._meta.uid} node={node} {...props} />
      ))
    : null;
}

export default ScreenRenderer;
