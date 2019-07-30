import {
  BLACKLIST_ATTACHMENTS,
  BLACKLIST_EXTENSIONS,
  BLACKLIST_TYPES,
  MAX_FILE_UPLOAD_SIZE
} from '../types/editor';

// Check if value is true
export const isEqualPositive = (value) => value === true;

// Check size of file
export const isTooBig = (files) => files.find((item) => item.size > MAX_FILE_UPLOAD_SIZE);

export const isForbidden = (files) => {
  return files.find((item) => BLACKLIST_ATTACHMENTS.indexOf(item.type) !== -1);
};

// Check if data is draft-js compatible
export const isDraftable = (content) => {
  return typeof content === 'object' && content.hasOwnProperty('entityMap');
};

// Check if is defined
export function isDefined(variable) {
  return typeof variable !== 'undefined' && variable !== null;
}
export function isNull(variable) {
  return variable === null;
}

export function isNoteNew(nextProps, thisProps) {
  return nextProps.id !== thisProps.id;
}

// TODO modularize below
export function isNewStandaloneNote(previousNote, newNote) {
  console.log('newNote', newNote);
  console.log('previousNote', previousNote);
  return previousNote.id !== newNote.id;
}

export function isDefinedEmpty(variable) {
  return typeof variable !== 'undefined' && variable !== null && variable !== '';
}

export function isEmpty(value) {
  return value === '';
}

// Check if type is update
export const isTypeofUpdate = (type) => {
  return type === 'update';
};
export const isTypeofCreate = (type) => {
  return type === 'create';
};
// Check if type is update
export const isTypeofImage = (type) => {
  return type.indexOf('image/') === 0;
};

export const isExtensionBlackListed = (name) => {
  const extension = name.split('.').pop();
  return BLACKLIST_EXTENSIONS.indexOf(extension) !== -1;
};

export const isTypeBlackListed = (type) => {
  return BLACKLIST_TYPES.indexOf(type) !== -1;
};

export const isExtensionNotBlackListed = (name) => {
  const extension = name.split('.').pop();
  return BLACKLIST_EXTENSIONS.indexOf(extension) === -1;
};

export const isTypeNotBlackListed = (type) => {
  return BLACKLIST_TYPES.indexOf(type) === -1;
};

export const isTypeEmpty = (type) => {
  return isEmpty(type);
};

export const isNotForbidden = (type, name) => {
  return !isTypeBlackListed(type) || !isExtensionBlackListed(name);
};
export const isFileForbidden = (type, name) => {
  return isTypeBlackListed(type) || isExtensionBlackListed(name);
};
export const isFileNotForbidden = (type, name) => {
  return !isTypeBlackListed(type) || !isExtensionBlackListed(name);
};

export const isTypeNotEmpty = (type) => {
  return type !== '';
};

export const isFileUploadSize = (size) => {
  return size <= MAX_FILE_UPLOAD_SIZE;
};

export const isLessThanFileUploadSize = (size) => {
  return size < MAX_FILE_UPLOAD_SIZE;
};

export const isLargerThanFileUploadSize = (size) => {
  return size > MAX_FILE_UPLOAD_SIZE;
};

// Check if all values are equal
export const isAllEqual = (array) => array.every((value) => value === array[0]);
export const isAllEqualAndFalse = (array) =>
  array.every((value) => value === array[0] && array[0] !== false);

// PDF file
export function isPDF(file) {
  return file.type === 'application/pdf';
}

// Plain Text File
export function isPlainText(file) {
  return file.type === 'text/plain';
}

// WordDocx
export function isWordDocx(file) {
  return file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
}

// Excel File
export function isXlsx(file) {
  return file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
}

// Power Point File
export function isPptx(file) {
  return file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
}

// RTF file
export function isRTF(file) {
  return file.type === 'text/rtf';
}

export function isEditorAPIQuill(date) {
  const threshhold = '1515689568079';
  const item = Date.parse(date);
  const isEditorAPIQuill = item > threshhold;
  return isEditorAPIQuill;
}
export function isEditorAPIDraft(date) {
  const threshhold = '1515689568079';
  const item = Date.parse(date);
  const isEditorAPIDraft = item > threshhold;
  return isEditorAPIDraft;
}

export function isUpdateFromDeleteStory(data) {
  return data.status && data.status === 1;
}
