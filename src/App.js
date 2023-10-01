
import './App.css';
import { Routes, Route,BrowserRouter, Navigate  } from 'react-router-dom';

import Home from './page/Home/Home';
import NotFound from './page/NotFound/NotFound';
import Layout  from './page/Layout/Layout';
import Clientes from './page/Clientes/Clientes';
import Login from './page/Login/Login';
import Cadastre from './page/Cadastre/Cadastre';


import {useState,useEffect} from 'react'

import  {onAuthStateChanged} from 'firebase/auth'

// HOOKS 

import { useAuthentication } from "./Hooks/useAuthentication";
// CONTEX 
import { AuthProvider } from "./Context/authContext";






function App() {

  const {auth} = useAuthentication()
  const[user,setUser] = useState()

  const loadingUser = user  === undefined

  
  useEffect(()=> {
    onAuthStateChanged(auth,(user) =>{
     setUser(user)
 
    })
 },[auth])


 
if(loadingUser) {
 return <p>Carregando..</p>
}

  return (
    <AuthProvider value= {{user}}>
    <BrowserRouter>
    <Routes>
    <Route  path= "/"element={<Layout />} >
      <Route index element={user ? <Home/> : <Navigate to='/login'/>} />
      <Route path="/clientes" element={user ? <Clientes/> : <Navigate to='/login'/>} />
    
      </Route>  
      <Route path="/Cadastre-se" element={<Cadastre/>} />
      <Route path="/login" element={<Login/> } />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
  </AuthProvider>
  );
}


export default App;
