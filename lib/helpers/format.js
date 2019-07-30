import moment from 'moment';
import React from 'react';
import 'moment-timezone';

export const formatAuthor = employee =>
  (employee.first_alt || employee.first_name) && (employee.last_alt || employee.last_name)
    ? `${employee.last_alt || employee.last_name}, ${employee.first_alt || employee.first_name}`
    : '--';

export const formatPermalink = ((note, usePermalink) => {
  return usePermalink ? `/story/${note.storyId}/note/${note.id}` : null;
});

export const formatDate = date =>
  moment(date)
    .tz('America/New_York')
    .format('h:mmA z, M/D/YY');
