/* eslint-disable no-unused-vars */
import { isDefined } from './is';
import { evalJson } from './evalJson';

function transformEntityMap(fileUpdates, item, parsedEditorText) {
  const { blocks, entityMap } = parsedEditorText;
  const newParsedEditorText = Object.assign({}, parsedEditorText);
  const newEntityMap = Object.assign({}, entityMap);
  const entitiesToUpdate = Object.keys(newEntityMap).map(index => {
    fileUpdates.map(file => {
      // AttacheFileKey is missing

      if (file.attachedFileKey === newEntityMap[index].data.uniqueKey) {
        newEntityMap[index].data.src = file.src; //
        newEntityMap[index].data.thumbnailUrl = file.thumbnailUrl;
      }
    });
  });
  newParsedEditorText.entityMap = newEntityMap;
  item.text = JSON.stringify(newParsedEditorText);
  return item;
}

function getAttachmentUpdate(file) {
  if (file.hasOwnProperty('attachedFileKey')) {
    return {
      attachedFileKey: file.attachedFileKey,
      thumbnailUrl: file.thumbnailUrl,
      src: file.assetUrl, //
    };
  }
}

export const hydrateInlineImage = item => {
  const editorText = item.text;
  const parsedEditorText = evalJson(editorText);

  if (isDefined(item.attachedFiles)) {
    const fileUpdates = item.attachedFiles.map(file => {
      return getAttachmentUpdate(file);
    });
    if (parsedEditorText.hasOwnProperty('entityMap')) {
      return transformEntityMap(fileUpdates, item, parsedEditorText);
    }
  }
  return item;
};
