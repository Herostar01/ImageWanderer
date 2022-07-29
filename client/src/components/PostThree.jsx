import React from 'react'

import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

const PostThree = () => {

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
        subheader="June 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://static.toiimg.com/photo/msid-90463167/90463167.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            My co-star Sharukh Khan has been a darling to work with and everyone will be excited to see him back in our latest movie: Pathan. 
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

export default PostThree