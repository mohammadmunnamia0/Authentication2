import { NavLink, Outlet } from 'react-router-dom'
import './App.css'


function App() {
 

  return (
    <>
  
      <div>

      <NavLink to='/Signup'><button>New User Sign Up</button></NavLink>
     
      </div>

      <Outlet></Outlet>
    
    </>
  )
}

export default App
