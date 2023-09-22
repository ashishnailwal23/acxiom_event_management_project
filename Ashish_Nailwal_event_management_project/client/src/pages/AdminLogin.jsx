import { useState } from 'react';
import './AdminRegister.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function AdminLogin() {
    const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    type:'admin'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const {username, email, password,type} = formData ;


  const handleSubmit = async(e) => {
    e.preventDefault();
    try{

      // You can add your registration logic here
      const {data} = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        email,
        password,
        type
      });


      if(data.user){
        localStorage.setItem(
          "localkey",
          JSON.stringify(data.user)
          );
          navigate("/admin/main")
        }

      else(
        navigate("/errorpage")
      )

    }
    catch(err){
      console.log(err);
    }

      
   
  };




  
  return (
    <div className="registration-container">
      <h1>Login - Admin</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
            {/* <Link to="/admin/main"> */}
        <button type="submit">
            Login
            </button>
            {/* </Link> */}
      </form>

<p  className='login-text'>New admin? 
<Link to={"/signup/admin"}>
<span className='login-span'>Register
</span>
</Link>
</p>


    </div>
  );
}

export default AdminLogin;