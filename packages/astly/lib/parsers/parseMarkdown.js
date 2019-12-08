import React from 'react';
import unified from 'unified';
import markdown from 'remark-parse';
import toReact from 'rehype-react';
import rehype from 'remark-rehype';
import visit from 'unist-util-visit';
import {handleText} from '../transformers';
// import squeezeParagraphs from 'remark-squeeze-paragraphs';
import msqueeze from 'mdast-squeeze-paragraphs';
import remove from 'unist-util-remove';
import sectionize from 'remark-sectionize';
import minifyWhitespace from 'rehype-minify-whitespace';
// import macro from 'remark-macro';

// macro.addMacro();
//
export const parseMarkdown = options =>
  unified()
    .use(markdown, {})
    .use(sectionize)
    .use(rehype)
    .use(handleText(options))
    .use(minifyWhitespace)
    .use(spy)
    .use(toReact, {
      components: options.components,
      Fragment: React.Fragment,
      createElement: React.createElement,
    });

function squee(ast) {
  return remove(ast, {cascade: false}, isLineBreak);
}

function isLineBreak(node) {
  return true;
}
function spy(options) {
  return function transformer(tree, file, next) {
    let promises = [];

    msqueeze(tree);

    visit(tree, function(node, index, parent) {
      promises.push(Promise.resolve());
    });
    Promise.all(promises).then(() => next(null, tree, file));
  };
}
