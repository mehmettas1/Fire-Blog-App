import * as React from "react";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import blokPng from "../assets/blok.png";
import googlePng from "../assets/google.png";
import { createUser } from "../helpers/firebase";

const Register = () => {

const [firstName, setFirstName] = useState();
const [lastName, setLastName] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();


const handleSubmit=(e)=>{
e.preventDefault()
console.log(firstName,lastName)
createUser()
};






  return (
    <Container className="login-container" sx={{width: "456px", height: "756px"}} >
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
          ── Register ──
        </Typography>
        <TextField placeholder="Email" variant="outlined" color="danger" />

        <TextField placeholder="Password" variant="outlined" color="danger" />
        <Grid item xs={12}>
          <Button
            style={{ backgroundColor: "#046582", fontWeight: 700 }}
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
            fullWidth
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
              fontSize: "0.9rem"
              ,background:'grey'
            }}
            variant="contained"
            color="secondary"
            type="submit"
          
            fullWidth
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

export default Register;
