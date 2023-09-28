import React from 'react'
import { useState} from 'react'
import style from '../Home/Home.module.css'
import { usePost } from '../../Hooks/Post'; 

const Home = () => {

    const [perguntas,setPerguntas] = useState('')
    const [respostas,setRespostas] = useState('')
  
    
    const {addQuestions} = usePost()


    const handleSubmit = (e) =>{

        e.preventDefault()


        const botData = {
            perguntas,
            respostas,
    
        }

      addQuestions(botData)
       
    }

  return (
    <div className={style.home}>
        <form onSubmit={handleSubmit}>
            <label>
                PERGUNTAS
                <input  value={perguntas} type="text"   onChange={(e)=>{setPerguntas(e.target.value)}}/>
            </label>
            <label>
                RESPOSTAS
                <input type="text" value={respostas} onChange={(e)=>{setRespostas(e.target.value)}} />
            </label>
          
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Home