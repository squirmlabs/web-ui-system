import moment from 'moment';
import React from 'react';
import 'moment-timezone';
import EditorialNoteComment from '../story/components/Editorial/EditorialNoteComment';

export const formatDateCreated = dateCreated =>
  dateCreated ? (
    <span className="date-created">
      {moment(dateCreated)
        .tz('America/New_York')
        .format('h:mmA z, M/D/YY')}
    </span>
  ) : (
    ''
  );

export const CommentItems = (comments, enableDelete, onDeleteCommentClick) =>
  comments
    .sort((a, b) => (a.dateCreated < b.dateCreated ? 1 : b.dateCreated < a.dateCreated ? -1 : 0))
    .filter(item => this.state.deletedCommentIds.indexOf(item.id) === -1)
    .map(item => {
      const isPendingDelete = comments.pendingDelete.indexOf(item.id) > -1;
      return (
        <EditorialNoteComment
          key={item.id}
          comment={item}
          enableDelete={enableDelete}
          onDeleteClick={() => onDeleteCommentClick(item.id)}
          isPendingDelete={isPendingDelete}
        />
      );
    });
