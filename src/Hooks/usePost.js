import axios from 'axios'
import { useAuthValue } from '../Context/authContext'

export function usePost(dataBot) {


    const url = "https://zapbot-backend.vercel.app/"

    const {user:contextUser} = useAuthValue()

    const addQuestions = async (dataBot) =>{

       
try {
     await axios.post(url, dataBot ) 
     console.log('cadastrado com sucesso')
  
} catch (err) {
    console.log(err)
}
    }

    // ADICIONADNO USUARIO AO BANCO 
    
 const addUser = async (user) =>{
    try {
        await axios.post(url, user) 
        console.log('cadastrado com sucesso')
     
   } catch (err) {
       console.log(err)
   }
 }
  
    return {
     addQuestions,
     addUser

    };
  }



export default usePost