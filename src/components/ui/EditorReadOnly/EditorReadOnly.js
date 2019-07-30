import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import PropTypes from 'prop-types';
import { EditorState, convertFromRaw } from 'draft-js';
import editorStyles from './editorStyles.css';

const { object, string } = PropTypes;
const initialState = {
  entityMap: {
    0: {
      type: 'IMAGE',
      mutability: 'IMMUTABLE',
      data: {
        src: '/images/canada-landscape-small.jpg'
      }
    }
  },
  blocks: [
    {
      key: '9gm3s',
      text:
        'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: 'ov7r',
      text: ' ',
      type: 'atomic',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0
        }
      ],
      data: {}
    },
    {
      key: 'e23a8',
      text: 'See advanced examples further down …',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ]
};
export default class EditorReadOnly extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createWithContent(convertFromRaw(initialState))
    };
  }

  render() {
    return (
      <div>
        <div>
          <div className={editorStyles.viewer}>
            <Editor readOnly onChange={() => {}} editorState={this.state.editorState} />
          </div>
        </div>
      </div>
    );
  }
}
EditorReadOnly.propTypes = {};
