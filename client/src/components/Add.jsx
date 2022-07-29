import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography,  } from '@mui/material'


import AddIcon from '@mui/icons-material/Add';

import React from 'react'
import { Box } from '@mui/system';
import { useState } from 'react';
import {  DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const Add = () => {

    const StyledModal = styled(Modal)({
        display:"flex",
        alignItems: "center",
        justifyContent:"center"
    })

    const UserBox = styled(Box)({
        display:"flex",
        alignItems: "center",
        gap:"10px",
        marginBottom:"20px"
        
    })

    const [open, setOpen] = useState(false)
    
    return (

    <>

    <Tooltip 
    onClick={e=>setOpen(true)}
    title="Add" 
    sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px )", md:30  },
    }}>

        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    </Tooltip>

    <StyledModal
    open={open}
    onClose={e=>setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
        <Box 
        width={400}
        height={320}
        
        p={3}
        borderRadius={5} 
        bgcolor={"background.default"}
        color={"text.primary"}
        >
            <Typography
            variant="h6" 
            color="gray"
            textAlign="center"
            >
                Create Post
            </Typography>
            <UserBox>

                <Avatar
                    src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-1dbiqc0t31jbij5viovvlurgm7-20180311194014.Medi.jpeg"
                    sx={{ width: 70, height: 70}}
                />
                <Typography
                fontWeight={500}
                variant="span"
                sx={{margin:3}}
                >
                    John Abraham
                </Typography>

            </UserBox>

            <TextField
            sx={{
                width:"100%",

            }}
          id="standard-multiline-static"
          multiline
          rows={3}
          defaultValue="What's on your mind?"
          variant="standard"
        />

        <Stack
        direction="row"
        gap={1}
        mt={2}
        mb={3}
        >
        
        <EmojiEmotions color="primary" />
        

        <Image  color="secondary"  />
        <VideoCameraBack color="success"/>
        <PersonAdd  color="error" />

        </Stack>

        <ButtonGroup 
        fullWidth
        variant="contained" 
        aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button
            sx={{
                width:"100px"
            }}
            > 
                <DateRange /> 
            </Button>
            
        </ButtonGroup>

        </Box>
    </StyledModal>

    </>
);
}

export default Add