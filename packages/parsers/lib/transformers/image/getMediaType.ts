import visit from 'unist-util-visit';
import {AstlyHastNode, AstlyParserOptions} from '../../types';

export {getMediaType};

function getMediaType(props: AstlyParserOptions) {
  return transformer;

  function transformer(tree: AstlyHastNode) {
    visit(tree, 'element', visitor);
  }

  function visitor(node: AstlyHastNode, index: number, parent: AstlyHastNode) {
    const {
      tagName,
      properties: {astly},
    } = node;
    if (tagName === 'img') {
      node.properties.astly = {...astly, mediaType: 'image', type: 'media'};
    } else if (tagName === 'video') {
      node.properties.astly = {...astly, mediaType: 'video', type: 'media'};
    } else if (tagName === 'audio') {
      node.properties.astly = {...astly, mediaType: 'audio', type: 'media'};
    } else if (tagName === 'figure') {
      node.properties.astly = {...astly, mediaType: 'image', type: 'media'};
    }
  }
}
