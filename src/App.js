import React from 'react';
import { createHashRouter, RouterProvider, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Card from './components/Cards/Card';
function App() {
 let routers =  createHashRouter([
  {index : true ,element :<Home/>},
  {path : '/home', element : <Card/>},
  {path : '/carditem/:id', element : <FullPageElement />},
  ])
  return (
    <RouterProvider router={ routers}>

    </RouterProvider>
  );
}


const FullPageElement = (props)=>{
 
  const location = useLocation()
  const navigate = useNavigate()
 
  return (
    <div style={{width: '100%', height: '50%',display:'flex',cursor:'pointer',margin:'auto', marginTop:'20px'}} onClick={()=>navigate('/')}>
    <img  alt={location.state.id} src={location.state.image} style={{width: '50%', height: '50%' ,margin:'auto'}} />
    </div>
  )
}

export default App;
