import axios from 'axios'

export function usePost(dataBot) {


    const url = "https://zapbot-backend.vercel.app/"
   
    const addQuestions = async (dataBot) =>{

       
try {
     await axios.post(url, dataBot ) 
     console.log('cadastrado com sucesso')
  
} catch (err) {
    console.log(err)
}
    }
  
    return {
     addQuestions
    };
  }

export default usePost