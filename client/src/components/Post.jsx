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
          <Avatar sx={{ bgcolor: "green" }} aria-label="recipe"
          src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-1dbiqc0t31jbij5viovvlurgm7-20180311194014.Medi.jpeg"
          >
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="John Abraham"
        subheader="September 21, 2020"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://t3.ftcdn.net/jpg/01/36/86/02/360_F_136860247_EZEktYTsrwGsIoMa1TdDXd5ImD8lmOYr.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive sunset overlooking the Pacific Ocean from the beaches of Maui, Hawaii stuns and mesmerizes ever tourist lucky enough to witness such awe inspring beauty. 
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