import {Button} from '@mui/material'
import {Delete} from '@mui/icons-material';

import { Add } from '@mui/icons-material'
import {Typography} from '@mui/material'

function App() {
  return (
    <div >
      Hello

      <Button variant="text">Text</Button>
      <Button variant="contained" color="success" startIcon={<Add />}  >Contained</Button>
      <Button variant="outlined" startIcon={<Delete />} >Outlined</Button>

      <Typography variant="h1" component="p">
        It uses h1 style but it's a p tag
      </Typography>

      <Button  variant="contained" sx={{
        backgroundColor:"skyblue",
        color: "#888",
        margin:5,
        "&:hover":{
          backgroundColor:"lightblue",
          color: "white"
        },
        "&:disabled":{
          backgroundColor:"gray",
          color:"white"
        }
      }}  >
        My Unique Button
      </Button>

    </div>
  );
}

export default App;
