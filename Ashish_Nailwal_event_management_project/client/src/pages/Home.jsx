
import {useNavigate } from "react-router-dom"
import "./Home.css"
const Home = () => {


const navigate = useNavigate();

  return (
    <div className="container">
    <h1 className="title">Event Management System</h1>
    <div className="categories">
      
      <button onClick={()=>navigate("/signup/admin")} className="category admin">Admin</button>
       

       
      <button onClick={()=>navigate("/signup/vendor")} className="category vendor">Vendor</button>
      

       
      <button onClick={()=>navigate("/signup/user")} className="category user">User</button>
      
    </div>
  </div>
  )
}

export default Home