import * as React from 'react';
import Box from '@mui/joy/Box';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';

export default function TextFieldColors() {
  return (
    <Box
      sx={{
        py: 2,
        display: 'grid',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
     
      
      <TextField
        placeholder="Email"
        variant="outlined"
        color="danger"
      />
      <TextField
        
        placeholder="Password"
        variant="outlined"
        color="danger"
      />
    <Button sx={{background: "rgb(4, 101, 130)",color:"white"}}>Register</Button>
    </Box>
  );
}
