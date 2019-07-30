/* eslint-disable no-unused-vars */
import { convertToRaw } from 'draft-js';
import { evalJson } from './evalJson';

// Evaluate parsed editor state
export function evaluateParsedEditorState(parsedEditorState) {
  return evalJson(parsedEditorState);
}

// Get parsed editor state
export function getParsedEditorState(editorState) {
  return JSON.stringify(convertToRaw(editorState.getCurrentContent()));
}

// Clone note editorState
export function cloneEditorState(noteEditorState) {
  return Object.assign({}, noteEditorState);
}

// Get entity keys
export function getEntityKeys(entityMap) {
  return Object.keys(entityMap);
}

// Get length of entity keys
export function getEntityKeysLength(entityKeys) {
  return entityKeys.length;
}
// Get length of entity keys
export function getNoteText(noteEditorState) {
  return JSON.stringify(noteEditorState);
}
// Get length of entity keys
export function getElementText(editorState) {
  return JSON.stringify(editorState);
}
