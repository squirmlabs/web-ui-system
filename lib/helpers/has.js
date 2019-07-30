export const updateHasThumbnailUrl = update => {
  return Object.prototype.hasOwnProperty.call(update, 'thumbnailUrl');
};
export const updateHasAttachedFileKey = update => {
  return Object.prototype.hasOwnProperty.call(update, 'attachedFileKey');
};
