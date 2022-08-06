import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import blok from "../assets/blok.png";
import { useContext } from "react";
import { BlogContext } from "../contexts/Blogcontext";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../helpers/firebase";

const theme = createTheme();

export default function UpdateBlog() {
  const navigate = useNavigate();
  const { info, setInfo, flag, setFlag } = useContext(BlogContext);
  const { auth } = useContext(AuthContext);

  const location = useLocation();
  const partUpdate = location.state;
  console.log(partUpdate);
  const [resource, setResource] = React.useState(partUpdate?.imageUrl);
  const [title, setTitle] = React.useState(partUpdate?.title);
  const [content, setContent] = React.useState(partUpdate?.content);

  // console.log(partUpdate);
  const handleFormUpdateReset = async (id) => {
    const userDoc = doc(db, "users", id);
    try {
      await updateDoc(userDoc, {
        imageUrl: resource,
        title: title,
        content: content,
        email: partUpdate.email,
        date: new Date().toLocaleString("tr-TR"),
      });
      console.log("güncellendi");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div
      style={{
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        // backgroundColor: (t) =>
        //   t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "89vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "bisque",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <Box
                component="form"
                /* onSubmit={(e)=>handleFormSubmit(e)} */ noValidate
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 1,
                }}
              >
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    // color: "darkslategray",

                    fontFamily: "fantasy",
                    marginTop: "5px",
                  }}
                >
                  <img src={blok} alt="blok" />
                </Typography>

                <TextField
                  type="text"
                  autoFocus
                  margin="normal"
                  required
                  fullWidth
                  name="imageUrl"
                  label="Image URL"
                  id="imageUrl"
                  onChange={(e) => setResource(e.target.value)}
                  color="success"
                  value={resource}
                />
                <TextField
                  type="text"
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  autoComplete="title"
                  onChange={(e) => setTitle(e.target.value)}
                  color="success"
                  value={title}
                />

                <TextField
                  type="text"
                  placeholder="Content"
                  multiline
                  rows={4}
                  margin="normal"
                  required
                  fullWidth
                  name="content"
                  label="Content"
                  id="content"
                  onChange={(e) => setContent(e.target.value)}
                  sx={{}}
                  color="success"
                  value={content}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "darkslategrey",
                  }}
                  onClick={() => handleFormUpdateReset(partUpdate?.id)}
                >
                  Update Blog
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}