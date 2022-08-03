import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/joy';
import blokPng from "../assets/google.png";


export default function BlogCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Avatar
        component="img"
        alt="green iguana"
        height="140"
        src={blokPng}
        sx={{ width: "156px", height: "156px", mx: "auto" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardContent>
      
    </Card>
  );
}
