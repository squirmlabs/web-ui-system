import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import PropTypes from 'prop-types';
import { EditorState, convertFromRaw } from 'draft-js';
import editorStyles from './styles.css';

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
export default class TextEditor extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createWithContent(convertFromRaw(initialState))
    };
  }
  onChange = editorState => {
    this.setState({
      editorState
    });
  };
  render() {
    const { readOnly } = this.props;
    return (
      <div>
        <div>
          <div className={editorStyles.viewer}>
            <Editor
              onChange={this.onChange}
              readOnly={readOnly}
              editorState={this.state.editorState}
            />
          </div>
        </div>
      </div>
    );
  }
}
TextEditor.propTypes = {
  readOnly: PropTypes.bool
};
