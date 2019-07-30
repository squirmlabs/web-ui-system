import { convertToRaw } from 'draft-js';
import deepEqual from 'deep-equal';
// TODO: move to lib/editor/formEvents.js
import { handleDraftIsDirty } from './form';

export const getEditorLength = ({ blocks }) => blocks[0].text.length;
export const getEditorEntityMap = ({ entityMap }) => entityMap;

export function onEditorEditorialChange(editorState, props, state) {
  const { actions: { editorialHandleDirty, editorialHandleEditorText }, fields } = props;

  const { text } = fields;

  const lastChangeType = editorState.getLastChangeType();

  const rawDraftContentState = JSON.stringify(convertToRaw(editorState.getCurrentContent())); //

  const oldEditorState = convertToRaw(state.editorState.getCurrentContent());
  const newEditorState = convertToRaw(editorState.getCurrentContent());
  const isSameContent = deepEqual(oldEditorState, newEditorState);
  // text.onChange(rawDraftContentState); // editorState
  // GIVEN that onChange event triggers,
  // compare oldEditorState & newEditorState,
  // evaluate if content is the same using deepEqual
  // if condition passes evaluate isEditorDirty
  if (isSameContent === false) {
    handleDraftIsDirty(editorialHandleDirty, newEditorState);
  }

  // Set elementForm.editorText with action - [ storyline  - 'story' redux - API ]
  editorialHandleEditorText(newEditorState); // editorState
  // Set editorState - [ React - Component API ]
  return { editorState };
}
