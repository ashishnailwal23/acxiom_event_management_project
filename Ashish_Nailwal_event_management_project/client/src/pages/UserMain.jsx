
import { useNavigate } from "react-router-dom"
import "./AdminMain.css"
// import "./UserMain.css"
import { useState } from "react";
const UserMain = () => {
  const navigate = useNavigate()
  const [selectedVendor, setSelectedVendor] = useState('');
  const vendors = ['Catering', 'Florist', 'Decoration Lighting'];

  const handleVendorSelect = (vendor) => {
    setSelectedVendor(vendor);
    navigate("/user/vendor/productlist")
  };
  return (
    <div className="container">
    <h1>Hello User</h1>
    <ul className="menu">
    <li className="dropdown">
          <span>Vendors &#9662;</span>
          <ul className="dropdown-content">
            {vendors.map((vendor) => (
              <li className="vendors" key={vendor} onClick={() => handleVendorSelect(vendor)}>
                {vendor}
              </li>
            ))}
          </ul>
        </li>
        <li><a href="#">Cart</a></li>
        <li><a href="#">Guest List</a></li>
        <li><a href="#">Order Status</a></li>
        <li 
        onClick={()=>{ localStorage.clear();
          navigate("/");}}
        className="logout" >
          <a href="#">Logout</a>
          </li>
    </ul>
</div>
  )
}

export default UserMain