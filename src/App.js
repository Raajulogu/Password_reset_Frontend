import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard';
import Signup from './components/signup';
import Login from './components/login';
import Forgot from './components/forgot';
import Reset from './components/reset';
import Otp from './components/Otp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/dashboard"
        element={<Dashboard/>}
        />
        <Route path="/signup"
        element={<Signup/>}
        />
        <Route path="/login"
        element={<Login/>}
        />
        <Route path="/forgot"
        element={<Forgot/>}
        />
        <Route path="/reset"
        element={<Reset/>}
        />
        <Route path="/otp"
        element={<Otp/>}
        />
        
      </Routes>
    </div>
  );
}

export default App;
