import { Outlet, Link,useNavigate} from "react-router-dom";
import style from "../Layout/Layout.module.css"
import { useEffect, useState } from "react";

import { useAuthentication } from '../../Hooks/useAuthentication'

import { useAuthValue } from '../../Context/authContext';

const Layout = () => {

const [isOpen,setIsOpen] = useState(false)
const [action,setAction] = useState('Fechar')
const navigate = useNavigate()



const {logout} = useAuthentication()
// const{user} = useAuthValue()

// useEffect(()=>{
// if (user === null) {
//   console.log('usuario não logado')
// }
// },[user])
  
  return (
    <div className={style.sideBar}>
      <nav className={isOpen ?style.close:style.open  }>

        <button value={action} onClick={()=>{
          if (!isOpen) {
            setIsOpen(true)
            setAction('Abrir')
          }
        else{
          setIsOpen(false)
          setAction('Fechar')
        }

        
      
        }} className={style.button}>{action} </button>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Clientes">Clientes</Link>
          </li>
         
        </ul>

        <button onClick={()=>{
        logout()
        navigate("/login")
      }}> teste</button>
      </nav>

      <Outlet />

     
    </div>
  )
};

export default Layout;