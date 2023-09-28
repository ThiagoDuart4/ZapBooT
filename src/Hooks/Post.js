import axios from 'axios'

export function usePost(dataBot) {

   
    const addQuestions = async (dataBot) =>{

        console.log(dataBot)
try {
     await axios.post("https://zapbot-backend.vercel.app/", dataBot ) 
  
} catch (err) {
    console.log(err)
}
    }
  
    return {
     addQuestions
    };
  }

export default usePost