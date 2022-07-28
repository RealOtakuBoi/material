import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  margin: "10px 10px 10px 10px",
  alignItems: "center",
}));

const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: 'white'
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  margin: "10px 10px 10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          GenerSite
        </Typography>
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <StyledBadge badgeContent={4} color="error">
          <EmailIcon />
          </StyledBadge>
          <StyledBadge>
            <NotificationsIcon/>
          </StyledBadge>
          <Avatar
            sx={{ width: 35, height: 35 }}
            src="https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq"
            onClick={(e) => setOpen(true)}
          />
        </Icons>

        <UserBox>
          <Avatar
            sx={{ width: 35, height: 35 }}
            src="https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq"
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="span">Shubh</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
