import React, { useState } from 'react';
import { AppBar, Toolbar, styled, Typography, Box, Badge, InputBase, Avatar, MenuItem, Menu } from "@mui/material";
import {EmojiNature, Notifications} from '@mui/icons-material';

import MailIcon from '@mui/icons-material/Mail';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}))

const Icons = styled(Box)(({theme}) => ({
    display: "none",
    alignItems: "center",
    gap:" 20px", 
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
    
}));

const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    gap:" 10px", 
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
    
}));

const Navbar = () => {

    const [open, setOpen] = useState(false)

return (

    <AppBar  position="sticky"  >
        <StyledToolbar  >
            <Typography  
            variant="h6" 
            sx={{
                display: {
                    xs: "none", sm: "block"
                }
            }}
            >
                Dreamscape
            </Typography >

            <EmojiNature sx={{
                display: {
                    xs: "block", sm: "none"
                }
            }} />

            <Search>
            <InputBase  placeholder='search...'  />
            </Search>

            <Icons>
                <Badge badgeContent={4} color="error">

                    <MailIcon  />

                </Badge>

                <Badge badgeContent={2} color="error" >
                    <Notifications />
                </Badge>

                <Avatar 
                    sx={{
                        width: 30,
                        height: 30,

                    }}
                    src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDg2OTcyOTM3NTQ1/rafael-sanzio-da-urbino-april-6-or-march-28-1483-april-6-1520-the-school-of-athens-or-scuola-di-atene-in-italian-is-one-of-the-most-famous-paintings-by-the-italian-renaissance-artist-raphael.jpg"
                    onClick={(e) => setOpen(true)}
                />
            </Icons>

            <UserBox    >   
            <Avatar 
                    sx={{
                        width: 30,
                        height: 30,

                    }}
                    src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDg2OTcyOTM3NTQ1/rafael-sanzio-da-urbino-april-6-or-march-28-1483-april-6-1520-the-school-of-athens-or-scuola-di-atene-in-italian-is-one-of-the-most-famous-paintings-by-the-italian-renaissance-artist-raphael.jpg"
                    onClick={(e) => setOpen(true)}
                />
                <Typography  variant="span"  >
                    Mack
                </Typography>
            </UserBox>

        </StyledToolbar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={(e) => setOpen(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>

)
}

export default Navbar