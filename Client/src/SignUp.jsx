import { Link } from "react-router-dom";
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp(){
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result=>{console.log(result)
        navigate('/login')})
        .catch(err=>console.log(err))    
    }
    
    return(
      <div className=' border d-flex justify-content-center align-items-center align-content-center mt-lg-4' >
      <form onSubmit={handleSubmit}>
                  <h3 className='text-center'>Register</h3>

                  <div className="mb-4">
                    <label>Name</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      onChange={(e)=>setName(e.target.value)}/>
                  </div>
  
                  <div className="mb-4">
                      <label>Email address</label>
                      <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                          onChange={(e)=>setEmail(e.target.value)}
                      />
                  </div>
                  <div className="mb-4">
                      <label>Password</label>
                      <input
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                          onChange={(e)=>setPassword(e.target.value)}
                      />
                  </div>
            
                  <div className="d-grid">
                      <button type="submit" className="btn btn-primary">Register</button>
                  </div>
                  <div className="d-grid">
                  <Link to='/login'>Login</Link>
                  </div>
              </form>
              
    </div>
    )
}   

export default SignUp;