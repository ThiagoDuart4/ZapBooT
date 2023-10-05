import React from 'react'
import style from '../Cadastre/Cadastre.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import { useAuthentication } from '../../Hooks/useAuthentication'

const Cadastre = () => {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState()

  const { createUser, error: authError, loading, msg, redirect, GoogleLogar } = useAuthentication()



  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')

    const user = {
      name,
      email,
      password,

    }
    if (ConfirmPassword !== password) {
      setError('As senhas nao são iguais!')
      return
    }
    const res = await createUser(user);
  }

  // GOOGLE LOGAR

  const actionGoogleLogin = async () => {
    GoogleLogar()
  }

  useEffect(() => {
    if (redirect === 1) {
      setTimeout(() => {
        navigate("/login")
      }, 3000);


    }
  }, [redirect])


  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  })
  return (
    <div className={style.cadastreMain}>
      <div className={style.cadastreForm}>
        <form onSubmit={handleSubmit}>

          <h2>Criar conta</h2>

          <label>
            Nome:
            <input
              type="text"
              name='name'
              placeholder='Digite seu nome'
              value={name}
              required
              onChange={(e) => { setName(e.target.value) }} />
          </label>
          <label>
            Email:
            <input
              type="email"
              name='email'
              placeholder='Digite seu email'
              value={email}
              required
              onChange={(e) => { setEmail(e.target.value) }} />
          </label>
          <label>
            Senha:
            <input
              type="password"
              name='password'
              placeholder='Digite sua senha'
              value={password}
              required
              onChange={(e) => { setPassword(e.target.value) }} />
          </label>
          <label>
            Confirmar senha:
            <input
              type="password"
              name='password'
              placeholder='Confirme sua senha'
              value={ConfirmPassword}
              required
              onChange={(e) => { setConfirmPassword(e.target.value) }} />
          </label>
          {!loading && <input type="submit" name="criar" value="Criar Conta" />}
          {loading && <input type="submit" value="Aguarde.." disable />}
          <button onClick={actionGoogleLogin}> Logar com google</button>
          {error && <p>{error}</p>}
          {msg && <p>{msg}</p>}
          <p>ja tem uma conta?<span><Link to="/login">Login</Link></span></p>
        </form>
      </div>
    </div>
  )
}

export default Cadastre