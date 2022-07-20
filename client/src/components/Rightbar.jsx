import React from 'react'
import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'

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
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>

    <Typography variant="h6"
            fontWeight={100}
            >
                Latest Photos

    </Typography>
    <ImageList>

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


        </Box>
        
    </Box>

)
}

export default Rightbar