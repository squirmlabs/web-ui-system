import * as UtilsNotes from './notes';
import { hydrateInlineImage } from './hydrateInlineImage';

export const updateHasThumbnailUrl = (update) => {
  return Object.prototype.hasOwnProperty.call(update, 'thumbnailUrl');
};

export const updateHasAttachedFileKey = (update) => {
  return Object.prototype.hasOwnProperty.call(update, 'attachedFileKey');
};

export const updateAttachmentsInNote = (note, update) => {
  const { storyId, attachmentId, thumbnailUrl } = update;
  // Match note
  const matchNote = UtilsNotes.isNoteMatchNoteId(note, update.noteId);
  if (!matchNote) {
    return note;
  }
  const attachedFiles = UtilsNotes.getAttachedFiles(note, update);
  const updatedAttachments = attachedFiles.map((file) => {
    if (file.id !== attachmentId) {
      return file;
    }
    return {
      ...file,
      thumbnailUrl
    };
  });

  return updatedAttachments;
};

export const updateTextInNote = (note, update) => {
  const noteMatched = UtilsNotes.isNoteMatchNoteId(note, update.noteId);
  // Match note
  if (!noteMatched) {
    return note;
  }

  const { text } = hydrateInlineImage(note);
  return text;
};
