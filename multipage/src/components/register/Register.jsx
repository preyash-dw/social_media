import React, { useState } from 'react'
import "./Register.scss"
import { Link } from 'react-router-dom'
import axios from "axios"
const Register = () => {

  const [inputs,setInputs]=useState({
    username:"",
    email:"",
    password:"",
    name:"",
  })

  const[err,setErr]=useState(null);

  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}));
  };
  

  const handleClick= async e=>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/api/auth/register",inputs);
    }
    catch(err){
      setErr(err.response.data);
    }
  }
  console.log(err);
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Register Here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo ipsam adipisci autem placeat, exercitationem eos et minus officiis amet ducimus veniam natus? Incidunt vel quas libero dolorum, deleniti at.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder='Username' name="username" onChange={handleChange}/>
            <input type="email" placeholder='Email' name="email" onChange={handleChange}/>
            <input type="password" placeholder='Password'name="password" onChange={handleChange} />
            <input type="name" placeholder='Enter name' name="name" onChange={handleChange}/>


             {err && err }
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register