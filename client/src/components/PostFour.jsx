import React from 'react'

import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

const PostFour = () => {

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
        subheader="July 17, 2021"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://assets.gqindia.com/photos/5cdc2fc962fe40b729841d2d/4:3/w_1440,h_1080,c_limit/john-abraham.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            I am humbled and honored to have been selected as India GQ's man of the year. 
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

export default PostFour