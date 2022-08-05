import * as React from "react";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import blokPng from "../assets/blok.png";
import googlePng from "../assets/google.png";
import { login, signUpProvider} from "../helpers/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

 const Login=()=> {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    // e.prevenDefault();
    login(email, password, navigate);
  };
  const handleProviderLogin = () => {
      signUpProvider(navigate);
    };
  return (
    <Container
      className="login-container"
      sx={{ width: "456px", height: "756px" }}
    >
      <Box
        sx={{
          py: 2,
          display: "grid",
          gap: 2,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Avatar
          className="login-avatar"
          src={blokPng}
          sx={{ width: "156px", height: "156px", mx: "auto" }}
          alt="avatar-img"
        />
        <Typography
          variant="h4"
          component="h1"
          sx={{ m: 4, fontFamily: "Girassol", color: "#046582" }}
        >
          ── Login ──
        </Typography>
        <TextField
          placeholder="Email"
          color="danger"
          autoFocus
          autoComplete="email"
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          placeholder="Password"
          variant="outlined"
          color="danger"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Grid item xs={12}>
          <Button
            style={{
              backgroundColor: "#046582",
              fontWeight: 700,
              color: "white",
            }}
            variant="contained"
            type="submit"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            style={{
              backgroundColor: "white",
              color: "black",
              fontWeight: 600,
              fontSize: "0.9rem",
              background: "grey",
            }}
            variant="contained"
            color="secondary"
            type="submit"
            fullWidth
            
            onClick={handleProviderLogin}
          >
            With{" "}
            <img
              src={googlePng}
              alt="google"
              style={{ width: "80px", marginLeft: "10px" }}
            />
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}
export default Login