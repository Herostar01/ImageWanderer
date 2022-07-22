import {  Box } from '@mui/material'
import React from 'react'
import Post from './Post'
import PostTwo from './PostTwo'

const Feed = () => {

return (

    <Box
    
    flex={4}
    p={2}
    >

    <PostTwo />
    
    <Post />

    <Post />

    <Post />

    <Post />

    <Post />

    </Box>

)
}

export default Feed