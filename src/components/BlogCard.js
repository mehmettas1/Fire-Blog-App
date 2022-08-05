import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, CardHeader } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import { useNavigate } from "react-router-dom";

export default function RecipeReviewCard({ user }) {
  const { content, date, email, id, title, imageUrl } = user;
  // const navigate = useNavigate();
  // console.log(user);
  return (
    <Card sx={{ width: "500px", height: "500px" }}>
      <CardMedia component="img" height="194" image={imageUrl} alt={title} />
      <CardContent sx={{ backgroundColor: "#E7E6F5" }}>
        <CardHeader title={title} subheader={date} />
        <Typography
          sx={{
            overflow: "hidden",
            height: "40px",
          }}
          variant="body2"
          color="text.secondary"
        >
          {content}
        </Typography>
      </CardContent>
      <CardContent>
        <AccountCircleIcon />
        <span>{email}</span>
      </CardContent>
      <CardActions sx={{ position: "relative" }} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Button
          // onClick={() => navigate(`${id}`, { state: user })}
          sx={{ left: "250px" }}
          variant="outlined"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}