
import { useEffect, useState } from "react";
import axios from "axios";


const url = `https://api.giphy.com/v1/gifs/random?api_key=YWfAyXM9upAEEYpq8Fe5k4h2NKNyGDNZ`;

const useGif = ()=>{
    const [gif,setGif] = useState("");
    const [loading,setLoading] = useState(false);
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    console.log(API_KEY);
    
    async function fetchData (){
        setLoading(true);
        
        const {data} = await axios.get(url);
        
        setGif(data.data.images.downsized_large.url);
        setLoading(false);
    }

    useEffect(()=>{fetchData();}
    ,[]);


    return {gif,loading,fetchData};
};

export default useGif;