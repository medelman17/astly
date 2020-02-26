import * as React from 'react';
import {Node, Parent} from 'unist';
import {Action, ActionTuple, Index} from 'unist-util-visit-parents';
import {VFile} from 'vfile';
import {Root} from 'postcss';
export {VFile, Root};

export type AstlyComponentMap = {
  [index: string]: React.ElementType<any>;
};

export type AstlyHtmlParserOptions = {
  components: AstlyComponentMap;
  tools?: {
    onClick: (node: AstlyHastNode, bag: {isNative: boolean}) => void;
    navigate: (node: AstlyHastNode, bag: {isNative: boolean}) => void;
  };
};

export type AstlyParserOptions = AstlyHtmlParserOptions;

export interface AstlyHastNode extends Node {
  type: 'element' | 'root' | 'text';
  tagName: any;
  properties: {[index: string]: any};
  content: any;
  children: any[];
  parent: AstlyHastNode;
}

export type Visitor<V extends Node> = (
  node: V,
  index: number,
  parent: Node,
) => void | Action | Index | ActionTuple;

type AstlyVFileData = {styles: any};

export interface AstlyHastVFile extends VFile {
  data: AstlyVFileData;
}
