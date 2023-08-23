import './css/App.css'
import Clock from "./pages/Clock.jsx";
import {useState} from "react";
import User from "./pages/User.jsx";
import Coments from "./pages/Coments.jsx";
function App() {
    const [block,setBlock] = useState('Clock')
    const btn = (selectBlock) =>{
        setBlock(selectBlock)
    }
    return(
        <>
            <h1>Home work(useState, useEffect)</h1>
            <div className='button-block'>
                <div className='button-item'>
                    <button onClick={()=>btn('Clock')}  className='button-click'>Clock</button>
                </div>
                <div className='button-item'>
                    <button onClick={()=>btn('User')} className='button-click'>User</button>
                </div>
                <div className='button-item'>
                    <button onClick={()=>btn('Coments')} className='button-click'>Comments</button>
                </div>
            </div>
            {block === 'Clock' && <Clock/>}
            {block === 'User' && <User/>}
            {block === 'Coments' && <Coments/>}
        </>
    )
}

export default App
