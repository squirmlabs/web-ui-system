// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '../../../symbols/elements/List';
import InboxIcon from '../../../symbols/elements/UIIcons/MoveToInbox';
import DraftsIcon from '../../../symbols/elements/UIIcons/Drafts';
import StarIcon from '../../../symbols/elements/UIIcons/Star';
import SendIcon from '../../../symbols/elements/UIIcons/Send';
import MailIcon from '../../../symbols/elements/UIIcons/Mail';
import DeleteIcon from '../../../symbols/elements/UIIcons/Delete';
import ReportIcon from '../../../symbols/elements/UIIcons/Report';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Starred" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="All mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem>
  </div>
);
