
import {AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar} from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';


const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',


})

const Search = styled("div")(({theme}) => ({
    backgroundColor: 'white',
    padding: '0px 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}))

const StyledBadge = styled(Badge)(({theme}) =>({
    margin: '10px 10px 10px 10px',
    alignItems: 'center',
}))

const Icons = styled(Box)(({theme}) => ({
    // backgroundColor: 'white'
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: 'flex'
    }
}))

const UserBox = styled(Box)(({theme}) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    margin: '10px 10px 10px',
    [theme.breakpoints.up("sm")]: {
        display: 'none'
    }
}))


export const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display: {xs:'none', sm: 'block'}}}>GenerSite</Typography>
            <Search><InputBase placeholder='Search'/></Search>
            <Icons>
            <StyledBadge badgeContent={4} color="error">
                <i><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></i>
            </StyledBadge>
            <StyledBadge>
                <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 16a2 2 0 002-2H6a2 2 0 002 2z"></path><path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 004 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 00-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 111.99 0A5.002 5.002 0 0113 6c0 .88.32 4.2 1.22 6z" clip-rule="evenodd"></path></svg></i>
            </StyledBadge>
            <Avatar sx= {{width: 35, height: 35}} src = "https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq" onClick={e=>setOpen(true)}/>
            </Icons>

            <UserBox>
            <Avatar sx= {{width: 35, height: 35}} src = "https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq" onClick={e=>setOpen(true)}/>
            <Typography variant='span'>Shubh</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose = {e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
