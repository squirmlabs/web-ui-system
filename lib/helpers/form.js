/* eslint-disable no-unused-vars, max-len, no-alert */
// Utils
import * as UtilsIs from './is';

// Types
import * as TypesEditor from '../types/editor';

// Pass action to set dirty state

export function handleDirtyState(action, dirty, funcKey) {
  action({ dirty, funcKey });
}

// Check for title or slug - I would like this to be more agnostic
export function isTargetEmpty(field, length) {
  return field === TypesEditor.FIELD_DISPLAYNAME_SUBJECT ||
    field === TypesEditor.FIELD_DISPLAYNAME_EDITOR ||
    field === TypesEditor.FIELD_DISPLAYNAME_TITLE ||
    field === TypesEditor.FIELD_DISPLAYNAME_INTERPLAY ||
    field === TypesEditor.FIELD_DISPLAYNAME_EDITOR_QUILL ||
    field === TypesEditor.FIELD_DISPLAYNAME_EDITOR_DRAFT ||
    field === TypesEditor.FIELD_DISPLAYNAME_EDITOR ||
    field === TypesEditor.FIELD_DISPLAYNAME_ATTACHMENTS
    ? length > TypesEditor.EMPTY_FIELD || length !== TypesEditor.EMPTY_FIELD
    : null;
}

export function isDirty(action, dirty, field, funcKey) {
  return field === TypesEditor.FIELD_DISPLAYNAME_SUBJECT ||
    field === TypesEditor.FIELD_DISPLAYNAME_EDITOR ||
    field === TypesEditor.FIELD_DISPLAYNAME_TITLE ||
    field === TypesEditor.FIELD_DISPLAYNAME_INTERPLAY ||
    field === TypesEditor.FIELD_DISPLAYNAME_EDITOR_QUILL ||
    field === TypesEditor.FIELD_DISPLAYNAME_EDITOR_DRAFT ||
    field === TypesEditor.FIELD_DISPLAYNAME_EDITOR ||
    field === TypesEditor.FIELD_DISPLAYNAME_ATTACHMENTS
    ? // ? this.handleDirtyState(dirty, funcKey)
      handleDirtyState(action, dirty, funcKey)
    : null;
}

// Map through all blocks and check if block.text are length of 0
// Send false if there is no length for any block.text, and vice versa.
export const handleDraftIsDirty = (action, { blocks }) => {
  const draftEditor = blocks
    .map(block => block.text.length === TypesEditor.EMPTY_DRAFT_BLOCK)
    .every(evaluation => UtilsIs.isEqualPositive(evaluation));
  isDirty(action, !draftEditor, 'editor-draft', 'isDraftDirty');
};

export const handleQuillIsDirty = (action, delta) => {
  // delta = Quill contents data - array
  const { ops } = delta;
  // Map through all ops and check if all are length of 1
  const quillBox = ops
    .map(op => {
      return op.insert.length === TypesEditor.EMPTY_QUILLBOX;
    })
    .every(evaluation => UtilsIs.isEqualPositive(evaluation));

  // Send false if there is no length for any ops, and vice versa.
  isDirty(action, !quillBox, 'editor-quill', 'isQuillDirty');
};


export const focus = editor => {
  editor.focus();
};

export const isInputEmpty = elem => {
  return elem > TypesEditor.EXPECTED_EDITOR_LENGTH;
};
