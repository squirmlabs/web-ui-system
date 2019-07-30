import {
  isExtensionBlackListed,
  isFileUploadSize,
  isTypeBlackListed,
  isTypeEmpty,
  isTypeofImage,
} from '../lib/is';

export function isEmptyTypeBlackListedExtension(name, type) {
  return isTypeEmpty(type) && isExtensionBlackListed(name);
}

export function isImageAndNotBlacklistedType(size, type) {
  return !isTypeBlackListed(type) && isTypeofImage(type) && isFileUploadSize(size);
}

export function isNotImageAndBlacklisted(name, type) {
  return isExtensionBlackListed(name) && isTypeBlackListed(type) && !isTypeofImage(type);
}

export function isLargeImageAndNotBlacklisted(size, type) {
  return !isTypeBlackListed(type) && isTypeofImage(type) && !isFileUploadSize(size);
}

export function isOtherAndNotBlacklistedType(size, type) {
  return !isTypeBlackListed(type) && !isTypeofImage(type) && isFileUploadSize(size)
}

export function isOtherAndNotBlacklistedExtension(name, size, type) {
  return !isExtensionBlackListed(name) && !isTypeofImage(type) && isFileUploadSize(size)
}
