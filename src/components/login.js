import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("")
  let [error,setError]=useState("")
  let navigate=useNavigate()

  async function handleLogin(){
    let userDetails={
      email,
      password
    }
    let response=await fetch(`https://password-reset-backend-zztf.vercel.app/Password_reset/login`,{
      method:"POST",
      body:JSON.stringify(userDetails),
      headers:{
        "Content-type":"application/json"
      }
    });

    let data =await response.json()
    if(data.token){
      setError("")
      localStorage.setItem("token",data.token)
      navigate("/")
    }
    else{
      setError(data.message)
    }
   
  }
  return (
    <div className='container'>
      
      <div className='login_body'>
      <h1 id="login_head">Login</h1>
        <form className={"login_form"}>
          <TextField label="Email" variant="filled" type="email" 
          className={"login_field"} placeholder="Enter your Email" required 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
          <br/>

          <TextField label="Password" variant="filled" type="password" 
          className={"login_field"} placeholder="Enter your Password" required 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/><br/>
          <button className="forgot_button" 
          onClick={()=>navigate("/forgot")}
          >Forgot Password</button>
        </form>
         <div className='login_button'>
         <Button style={{marginRight:"40px"}} type="submit" 
         variant="contained" color="primary" onClick={()=>navigate("/signup")}>
              Signup
            </Button>
            <Button type="submit" variant="contained" color="primary"
            onClick={handleLogin}>
              Login
            </Button>
         </div>
         {error ?
            <Typography color={"danger"}>
              {error}
            </Typography>:""
              }
      </div>
    </div>
  )
}

export default Login
