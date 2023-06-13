import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  let [name,setName]=useState("");
  let [contact,setContact]=useState("");
  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("");
  let [error,setError]=useState("");
  let navigate=useNavigate()

  async function handleSignup(){
    let userDetails={
      name,
      contact,
      email,
      password
    }
    try {
      let response=await fetch("https://password-reset-backend-zztf.vercel.app/Password_reset/signup",{
      method:"POST",
      body:JSON.stringify(userDetails),
      headers:{
        "Content-type":"application/json"
      }
    });

    let data=await response.json()
    if(data.token){
      setError("")
      localStorage.setItem("token",data.token)
      navigate("/")
    }
    else{
      setError(data.message)
    }
    } catch (error) {
     console.log("Error",error) 
    }
  }
  return (
    <div className='container'>
      <div className='signup_body'>
      <h1 id="signup_head">Signup</h1>
        <form className={"signup_form"}>
          <TextField label="Name" variant="filled" className={"signup_field"}
          placeholder="Enter your Name" required
          value={name}
          onChange={(e)=>setName(e.target.value)}/>
          <br/>

          <TextField label="Contact" variant="filled" className={"signup_field"}
          placeholder="Enter your Contact" required 
          value={contact}
          onChange={(e)=>setContact(e.target.value)}/>
          <br/>

          <TextField label="Email" variant="filled" type="email" 
          className={"signup_field"} placeholder="Enter your Email" required 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
          <br/>

          <TextField label="Password" variant="filled" type="password" 
          className={"signup_field"} placeholder="Enter your Password" required 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/>
        </form>
         <div className='signup_button'>
            <Button type="submit" variant="contained" color="primary"
            onClick={handleSignup}>
              Signup
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

export default Signup
