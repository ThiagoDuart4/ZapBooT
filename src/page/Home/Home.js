import React from 'react'
import { useState,useEffect} from 'react'
import style from '../Home/Home.module.css'
import { usePost } from '../../Hooks/usePost'; 
import { useGet } from '../../Hooks/useGet'; 
import  HoverBar from "../../components/HoverBar/hoverbar"

const Home = () => {

    const [pergunta,setPerguntas] = useState('')
    const [resposta,setRespostas] = useState('')

    const {addQuestions} = usePost()
   
    const { GetQuestions } = useGet();

    useEffect(() => {
      GetQuestions();
    }, []);
  
    const handleSubmit = (e) =>{

        e.preventDefault()


        const botData = {
            pergunta,
            resposta,
    
        }

addQuestions(botData)
       
    }

  return (
    <div className={style.home}>

        <HoverBar/>
        <form onSubmit={handleSubmit}>
            <label>
                PERGUNTAS
                <input  value={pergunta} type="text"   onChange={(e)=>{setPerguntas(e.target.value)}}/>
            </label>
            <label>
                RESPOSTAS
                <input type="text" value={resposta} onChange={(e)=>{setRespostas(e.target.value)}} />
            </label>
          
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Home