

import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random(){


    const {gif,loading,fetchData} = useGif();


    return(
        <div className="bg-green-400 rounded-lg w-4/12 h-auto m-auto mt-[200px] flex flex-col items-center gap-y-3">
            <h1 className="text-center text-2xl font-bold underline  mt-3 ">
                A RANDOM GIF
            </h1>
            {
                loading ? (<Spinner/>) : (<img src={gif} className="m-auto" />)
            }
            <button className="bg-orange-500 text-2xl rounded-[8px] w-10/12 p-2 
             font-bold mb-4" onClick={()=>{fetchData()}}>
                GENERATE
            </button>
        </div>
    );
}