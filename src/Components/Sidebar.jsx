

import React from 'react'
import {Box} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export const Sidebar = () => {
  return (
    <Box bgcolor='pink' flex={1} p={2} sx={{display:{xs: 'none', sm: 'block'}}}>Sidebar</Box>
  )
}
