export function getDefaultAuthor(author) {
  let defaultAuthor = '';
  if (author.first_name) {
    defaultAuthor = `${author.last_alt ||
      author.last_name}, ${author.first_alt || author.first_name}`;
    return defaultAuthor;
  }
  return defaultAuthor;
}

export function isCurrentUserAdmin({ admin }) {
  return admin;
}
