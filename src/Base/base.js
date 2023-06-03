import { AppBar, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Base = ({title, description, children}) => {
  //const history = useHistory() v5
const navigate = useNavigate()
return (
  <div className='main-container'>
    <header>
    <nav>
    <AppBar position="static">
<Toolbar variant="dense">
  
  <IconButton 
  edge="end" 
  color="inherit" 
  aria-label="add students" 
  onClick={()=>navigate("/login")}
  sx={{ mr: 2 }}>  
   Logout
  </IconButton>

</Toolbar>
</AppBar>
      </nav>
    </header>
    <main>
        <h1>{title}</h1> 
        <h4>{description}</h4>
        <div className='contents'>
              {children}
        </div>
    </main>
  </div>
)
}

export default Base