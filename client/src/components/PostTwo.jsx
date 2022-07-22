import React from 'react'

import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

const PostTwo = () => {

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
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDxbbCTZeX36tsbhFmIgVitYqppmfz79Evg&usqp=CAU"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          John Abraham and Sharukh Khan star in this action packed, suspense-filled, thriller movie. 
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

export default PostTwo