/* eslint-disable no-unused-vars, max-len, no-alert */
import * as TypesEditor from '../types/editor';
import * as TypesFiles from '../types/files';
import * as TypesStrings from '../types/string';
import {
  isEmptyTypeBlackListedExtension,
  isImageAndNotBlacklistedType,
  isNotImageAndBlacklisted,
  isLargeImageAndNotBlacklisted,
  isOtherAndNotBlacklistedType
} from './fileSelectors';

// Read file contents intelligently as plain text/json, image as dataUrl or
// anything else as binary
export function readFile(file) {
  return new Promise(resolve => {
    const reader = new FileReader();

    // This is called when finished reading
    reader.onload = event => {
      // Return an array with one image
      resolve({
        // These are attributes like size, name, type, ...
        lastModifiedDate: file.lastModifiedDate,
        lastModified: file.lastModified,
        name: file.name,
        size: file.size,
        type: file.type,
        src: file.src,

        // This is the files content as base64
        base64Src: event.target.result
      });
    };
    if (file.type.indexOf('text/') === 0 || file.type === 'application/json') {
      reader.readAsText(file);
    } else if (file.type.indexOf('image/') === 0) {
      reader.readAsDataURL(file);
    } else {
      reader.readAsBinaryString(file);
    }
  });
}

// Read multiple files using above function
export function readFiles(files) {
  return Promise.all(files.map(readFile));
}
export function readSingleFile(file) {
  return Promise.all(readFile(file));
}

// Read multiple files using above function
export function readAttachmentFile(file) {
  return readFile(file);
}

export function handleFileFormData(files) {
  const formData = new FormData();
  // Set data {files: [Array of files], formData: FormData}
  const data = { files: [], formData };
  for (const key in files) {
    // eslint-disable-line no-restricted-syntax
    if (files[key] && files[key] instanceof File) {
      data.formData.append('files', files[key]);
      data.files.push(files[key]);
    }
  }
  return data;
}

export function readFormFileData(
  config,
  editorState,
  fileFormData,
  readFiles,
  setEditorState,
  state
) {
  readFiles(fileFormData.files).then(placeholders => {
    // Add blocks for each image before uploading
    placeholders.forEach(placeholder => {
      const { name, size, type } = placeholder;
      if (isImageAndNotBlacklistedType(size, type)) {
        config.store.actions.setFilesToUpload(fileFormData.files);
        editorState = config.addImage(state, placeholder);
      } else if (isEmptyTypeBlackListedExtension(name, type)) {
        const prompt = confirm(
          "Sorry, but this file may not be attached due to it's file type"
        );
        return 'handled';
      } else if (isNotImageAndBlacklisted(name, type)) {
        const prompt = confirm(
          "Sorry, but this file may not be attached due to it's file type"
        );
        return 'handled';
      } else if (isLargeImageAndNotBlacklisted(size, type)) {
        const prompt = confirm(
          'Sorry, but this file is too large. Please make sure that the file you are attaching is less then 5 mb'
        );
        return 'handled';
      } else if (isOtherAndNotBlacklistedType(size, type)) {
        const prompt = confirm(
          'Sorry, drag and drop is not supported for files that are not images. Please attach file using the add attachment button'
        );
        return 'handled';
      }
    });
    setEditorState(editorState);
  });
  return 'handled';
}
