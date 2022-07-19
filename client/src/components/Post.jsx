import React from 'react'

import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

const Post = () => {

  return (

    <div>
        <Card 
        sx={{
          margin: 5
        }}
        >
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
            J
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="John Hansen"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://t3.ftcdn.net/jpg/01/36/86/02/360_F_136860247_EZEktYTsrwGsIoMa1TdDXd5ImD8lmOYr.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>

      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">

        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite 
        sx={{color:"red"}}
        />} 
        />

        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>

      </CardActions>
      
    </Card>
    </div>

    )
}

export default Post