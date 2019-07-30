import * as UtilsArray from './array';

// Note matching storyId
export const isNoteMatchStoryId = (note, storyId) => {
  return note.storyId === storyId;
};

// Note matching noteId
export const isNoteMatchNoteId = (note, noteId) => {
  return note.id === noteId;
};

// File matching attachmentId
export const isFileMatchAttachmentId = (file, attachmentId) => {
  return file.id === attachmentId;
};

// Clone Notes State, updateNoteAttachments
export const getAttachedFiles = note => {
  return UtilsArray.cloneArray(note.attachedFiles);
};

// Give me a note and Ill give you the text
export const getEditorTextByNote = note => note.text;

export const getNoteReadStatus = (note, relationships, currentUser) => {
  if (currentUser.pernr === note.employee.pernr) {
    return 'READ';
  }
  const hasReadStatus = relationships.sinceDate
    ? new Date(note.dateCreated) >= relationships.sinceDate
    : false;
  return hasReadStatus
    ? relationships[`${note.id}$NOTE$HAS_READ`] ? 'READ' : 'UNREAD'
    : 'UNKNOWN';
};

// TODO: immutable use
// const useNewMutableNotes = func => {
//   return (state, update) => {
//     const notes = cloneArray(state.results);
//     // const results = state.results.slice(0);
//     func(notes, update);
//     return {
//       ...state,
//       notes,
//     };
//   };
// };
// export const updateNotes = useNewMutableNotes((notes, update) => {
//   if (updateHasThumbnailUrl(update)) {
//     const updatedAttachment = notes
//       .map(note => updateAttachmentsInNote(note, update))
//       .reduce((acc, value) => {
//         return acc.concat(value);
//       }, []);
//   }
// });
