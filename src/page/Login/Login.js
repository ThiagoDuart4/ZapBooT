import React from 'react'
import style from "../Login/Login.module.css"
import { useState,useEffect } from 'react'
import { Link,useNavigate} from "react-router-dom";
import { useAuthentication } from '../../Hooks/useAuthentication'

import { useAuthValue } from '../../Context/authContext';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState()

  const {login, error: authError , loading,redirect,GoogleLogar} = useAuthentication()

  const navigate = useNavigate()
  const {user:contextUser} = useAuthValue()

  const handleSubmit =  async (e)=>{
 e.preventDefault()

 setError('')

 const user = {
  email,
password
 }

 const res = await login(user)
  }


  useEffect(()=>{
    if (contextUser && redirect === 1 &&  contextUser.emailVerified  === true     ) {
      navigate("/")

    }
    else  if  (contextUser && contextUser.emailVerified  === false) {
      console.log('Confirme seu email antes por favor')
    }
  
   },[redirect])


  useEffect(()=>{
    if(authError){
      setError(authError)
    }
  })
  return (
    <div className={style.LoginMain}>
           <div className={style.LoginForm}>
            <h3>Entrar</h3>
           <form  onSubmit={handleSubmit}>
            <label >
              Email
              <input
               type="email"
                name='email' 
                required
                value={email}
                onChange={(e)=>{
              setEmail(e.target.value)
              }}/>
            </label>
            <label >
              Senha
              <input 
              type="password" 
              name='password' 
              required
              value={password} 
               onChange={(e)=>{setPassword(e.target.value)}}/>
            </label>
            <hr/>
            <input type="submit" value="Logar" name='logar' />
         </form>
         {error && <p>{error}</p>}
          <p>Não tem uma conta?<span><Link to ='/cadastre-se'>Crie uma</Link></span></p>
          <p>Esqueci minha senha</p>
           </div>
    </div>
  )
}

export default Login