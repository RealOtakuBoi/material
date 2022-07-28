import React from "react";
import { Box, Typography, AvatarGroup, Avatar } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';




export const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Online Friends</Typography>

        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg" />
          <Avatar alt="Travis Howard" src="https://wallpaperaccess.com/full/5335553.jpg" />
          <Avatar alt="Cindy Baker" src="https://i.pinimg.com/474x/03/4b/de/034bde783ea726b922100c86547831e8.jpg" />
          <Avatar alt="Agnes Walker" src="https://wallpaperaccess.com/full/4595687.jpg" />
          <Avatar alt="Trevor Henderson" src="http://i0.wp.com/i.pinimg.com/736x/ce/6c/2f/ce6c2f498dc7473900e03306439d65dd.jpg?resize=160,120" />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest From Friends</Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1659010895460-17f8160c84ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80" alt="" />
        </ImageListItem>

        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1658909914248-15157163c878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </ImageListItem>

        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1659008316680-95845d6b72f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </ImageListItem>
        </ImageList>


        <Typography variant='h6' fontWeight={100} mt={2}>Recent Chats</Typography>
        
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/474x/03/4b/de/034bde783ea726b922100c86547831e8.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://i.pinimg.com/originals/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://wallpaperaccess.com/full/4595687.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations?'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};
