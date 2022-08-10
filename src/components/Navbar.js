import React,{useContext} from 'react'
// import { logout } from "../utils/firebaseUtil";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import cwLogo from "../assets/cw.jpeg"
import { AuthContext } from '../contexts/AuthContext';
import { logOut } from '../helpers/firebase';


const Navbar = () => {
    const navigate = useNavigate();
    // const [currentUser, setCurrentUser ] = React.useState(true);
    const { currentUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
// console.log(currentUser);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogin = () => {
    setAnchorEl(null);
    navigate("/login");
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logOut();
  };

  const handleRegister = () => {
    setAnchorEl(null);
    navigate("/register");
  };
  const handleProfile = () => {
    setAnchorEl(null);
    navigate("/profile");
  };
  const handleNewBlog = () => {
    setAnchorEl(null);
    navigate("/newblog");
  };
// console.log(currentUser)
  return (
    
        <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" style={{backgroundColor:"#046582"}}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img style={{width:"40px"}} src={cwLogo} alt="logo" />
          </Typography>
            
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer", fontFamily:"Girassol",textAlign:"center" }}
            onClick={() => navigate("/")}
          >
            ──── <span style={{fontSize:"2rem",color:"#F5DEB3"}}>{"<mehmettas/>"}</span> Blog ────
          </Typography>
          {
            currentUser ? (
                <div>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Typography
                  sx={{
                    marginRight: "1rem",
                  }}
                >
                  {currentUser?.displayName}
                </Typography>
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={()=>setAnchorEl(null)}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleNewBlog}>New</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>

            ):(

            <div>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleLogin}
              >
                <MenuItem onClick={handleLogin}>Login</MenuItem>
                <MenuItem onClick={handleRegister}>Register</MenuItem>
              </Menu>
            </div>
            )}
        </Toolbar>
      </AppBar>
    </Box>
    
  )
}

export default Navbar