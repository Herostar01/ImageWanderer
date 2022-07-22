import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

const Rightbar = () => {

return (

    <Box
    
    flex={2}
    p={2}
    sx={{ 
        display: {
            xs: "none", sm: "block"
        }
    }}
    >

        <Box
        position="fixed">
            <Typography variant="h6"
            fontWeight={100}
            >
                Online Friends

            </Typography>

            <AvatarGroup max={7}>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
    </AvatarGroup>

    <Typography variant="h6"
            fontWeight={100}
            mt={2}
            mb={2}
            >
                Latest Photos

    </Typography>
    <ImageList
        cols={3} rowHeight={100} gap={5}
    >

        <ImageListItem>
            <img  
                src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/08/12/1513/Hana-Maui-Resort-P001-Garden-Suite-View.jpg/Hana-Maui-Resort-P001-Garden-Suite-View.16x9.jpg"
                alt=""
            />
        </ImageListItem>
        <ImageListItem >
            <img  
                src="https://ak.picdn.net/offset/photos/5d31e837469b183482a1c8e0/medium/photo.jpg"
                alt=""
            />
        </ImageListItem>
        <ImageListItem>
            <img 
                src="https://imgproxy.backpackerdeals.com/1DJAlD_PsCdMfhAsxDEhYhipCzbJ2RT7itih61yU7ls/q:85/w:3000/h:2400/plain/https://assets.travelloapp.com/uploads/deal/road-to-hana-adventure-tour-with-lunch-deal-1.jpg"
                alt=""
            />
        </ImageListItem>
        <ImageListItem>
            <img 
                src="https://fh-sites.imgix.net/sites/959/2018/01/25161348/02-Hana-Home-Page.jpg?auto=compress%2Cformat&w=700&h=700&fit=max"
                alt=""
            />
        </ImageListItem>

    </ImageList>

    <Typography variant="h6"
            fontWeight={100}
            mt={2}
            
            >
                Latest Conversation

    </Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
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
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
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
            <Avatar alt="Cindy Baker" 
            src="https://mui.com/static/images/avatar/3.jpg" />
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
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>


        </Box>
        
    </Box>

)
}

export default Rightbar