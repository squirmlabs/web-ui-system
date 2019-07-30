// TODO: Name this file 'editorDeHydrate.js' and put editor selectors in 'editorSelectors.js'
/* eslint-disable no-unused-vars */
import { convertToRaw } from 'draft-js';
import { evalJson } from './evalJson';
import { isDefined } from './is';

// Dehydrate base64 encoded strings from image entity src.
export const dehydrateBase64Src = noteEditorState => {
  const newNoteEditorState = Object.assign({}, noteEditorState);
  const { blocks, entityMap } = newNoteEditorState;
  const updateEntities = Object.keys(entityMap).map(index => {
    // eslint-disable-line no-unused-vars
    entityMap[index].data.base64Src = '';
  });
  return newNoteEditorState;
};

// HydrateBase64Src
export const hydrateBase64Src = (data, state) => {
  if (isDefined(state)) {
    data.text = state;
  }
  return data;
};
