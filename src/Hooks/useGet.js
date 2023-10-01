import axios from 'axios';
import { useState, useEffect } from 'react';

export function useGet() {
  const url = "https://zapbot-backend.vercel.app/";

  const [data, setData] = useState();

  const GetQuestions = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
  
    
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetQuestions();
  }, []);

  return { data, GetQuestions };
}

export default useGet;