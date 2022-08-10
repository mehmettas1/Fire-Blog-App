import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Grid } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";

import { AuthContext } from "../contexts/AuthContext";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../helpers/firebase";

export default function RecipeReviewCard() {
  const navigate = useNavigate();
  const { auth } = React.useContext(AuthContext);

  //! below prepare for update data
  const location = useLocation();
  const part = location.state;
  // console.log(auth.providerData[0].email);

  // const { setFlag } = React.useContext(BlogContext);
  const handleUpdate = () => {
    // navigate("updateBlog", { state: part });
    navigate("newb", { state: part });
    // setFlag(false);
  };
  //!below for delete data
  const handleDelete = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    navigate("/");
  };
  console.log(part.id);
  return (
    <Container>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{ mt: 3 }}
      >
        <Card sx={{ m: "auto", textAlign: "center", width: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image={part.imgurl}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {part.desc}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              <AccountCircleIcon /> {part.email}
              {part.date}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <ReplyAllIcon onClick={() => navigate(-1)} />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ChatBubbleOutlineIcon />
            </IconButton>
          </CardActions>
        </Card>
        {auth.providerData[0].email === part.email && (
          <CardActions sx={{ m: "auto" }}>
            <IconButton aria-label="add to favorites">
              <Button onClick={handleUpdate} variant="contained">
                UPDATE
              </Button>
            </IconButton>
            <IconButton aria-label="share">
              <Button onClick={() => handleDelete(part.id)} variant="outlined">
                DELETE
              </Button>
            </IconButton>
          </CardActions>
        )}
      </Grid>
    </Container>
  );
}