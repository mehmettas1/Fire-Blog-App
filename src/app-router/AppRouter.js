import { BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import BlogCard from "../components/BlogCard"
import Navbar from "../components/Navbar"
import Dashboard from "../pages/Dashboard"
import Details from "../pages/Details"
import Login from "../pages/Login"
import Newblog from "../pages/Newblog"
import Profile from "../pages/Profile"
import Register from "../pages/Register"
import UpdateBlog from "../pages/UpdateBlog"
import PrivateRouter from "./PrivateRouter"






const AppRouter = () => {
  return (
    <Router>
    <Navbar/>
    <Routes>
        {/* <Route path="/" element = {<PrivateRouter/>}> */}
        <Route path="" element={<Dashboard/>}/>
        {/* </Route> */}
        <Route path="/Login" element={<Login/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/updateblog" element={<UpdateBlog/>}/>
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="register" element = {<Register/>}/>
        <Route path="/newblog" element = {<Newblog/>}/>
        <Route path="/blogcard" element = {<BlogCard/>}/>
    </Routes>
    
    </Router>
  )
}

export default AppRouter