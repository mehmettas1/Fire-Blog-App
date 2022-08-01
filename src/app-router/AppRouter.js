import { BrowserRouter ,Routes,Route} from "react-router-dom"
import Navbar from "../components/Navbar"
import Dashboard from "../pages/Dashboard"
import Newblog from "../pages/Newblog"
import Profile from "../pages/Profile"
import Register from "../pages/Register"






const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element = {<Dashboard/>}/>
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="register" element = {<Register/>}/>
        <Route path="/newblog" element = {<Newblog/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default AppRouter