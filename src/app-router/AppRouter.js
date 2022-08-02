import { BrowserRouter ,Routes,Route} from "react-router-dom"
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
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element = {<PrivateRouter/>}>
          <Route path="" element={<Dashboard/>}/>
        </Route>
        <Route path="/Login" element={<Login/>}
        <Route path="/details" element={<Details/>}
        <Route path="/updateblog" element={<UpdateBlog/>}
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="register" element = {<Register/>}/>
        <Route path="/newblog" element = {<Newblog/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default AppRouter