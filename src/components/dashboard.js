import React,{useEffect} from 'react'
import Base from '../Base/base'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let navigate=useNavigate()
  useEffect(()=>{
  if(!localStorage.getItem("token")){
    navigate("/login")
  })
  
  
}
  
  return (
    <Base>
    Hi This is Your Dashboard<br/>
    <img className='dash_img' src="https://pbs.twimg.com/media/Fn2sOLGacAEy4qP.jpg" alt="Dashboard image"/>
    </Base>
  )
}

export default Dashboard
