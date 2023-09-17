
import Random from "./components/Random";
import './App.css';


function App() {


  return (

    <div className="h-screen w-full bg-gradient-to-r from-violet-500 to-cyan-500">
       
          <div className="w-11/12 m-auto py-2 rounded-lg bg-slate-50 text-center font-bold text-3xl  relative top-3">

            RANDOM GIFs

          </div>

          <Random />

    </div>
    
  );
}

export default App;
