
import { useNavigate } from "react-router-dom"
import "./AdminMain.css"
const VendorMain = () => {
  const navigate = useNavigate() ;
  return (
    <div className="container">
    <h1>Hello Vendor</h1>
    <ul className="menu">
        <li><a href="#">Your Items</a></li>
        <li><a href="#">Add New Item</a></li>
        <li><a href="#">Transactions</a></li>
        <li onClick={()=>{ localStorage.clear();
          navigate("/");}} className="logout" >
          {/* <Link to={"/"}> */}
          <a href="#">Logout</a>
          {/* </Link> */}
          </li>
    </ul>
</div>
  )
}

export default VendorMain