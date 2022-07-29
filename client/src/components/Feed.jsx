import {  Box } from '@mui/material'
import React from 'react'
import Post from './Post'
import PostFour from './PostFour'
import PostThree from './PostThree'
import PostTwo from './PostTwo'

const Feed = () => {

return (

    <Box
    
    flex={4}
    p={2}
    >

    <PostTwo />
    
    <PostThree />

    <PostFour />

    <Post />

    

    </Box>

)
}

export default Feed