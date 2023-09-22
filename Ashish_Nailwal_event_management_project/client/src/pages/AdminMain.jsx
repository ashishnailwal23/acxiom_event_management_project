
import { Link, useNavigate } from "react-router-dom"
import "./AdminMain.css"
import { useEffect } from "react";



const AdminMain = () => {
  let navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("localkey")) {
      navigate("/admin/main");
    }
    else{
      navigate("/")
    }
  }, [localStorage.getItem("localkey")]);



  return (
    <div className="container">
    <h1>Maintenance Menu</h1>
    <ul className="menu">
        <li><a href="#">Add Event</a></li>
        <li><a href="#">Edit Event</a></li>
        <li><a href="#">Users Management</a></li>
        <li><a href="#">Vendors Management</a></li>
        <li><a href="#">Generate Reports</a></li>
        <li onClick={()=>{ localStorage.clear();
      navigate("/");
    }
      }
       className="logout" >
          <Link to={"/"}>
          <a href="#">Logout</a>
          </Link>
          </li>
    </ul>
</div>
  )
}

export default AdminMain