import { useState } from 'react';
import './App.css';
import HomePage from './routes/HomePage';
import GetSchemea from './component/scheme';



function App() {
    const [isClicked, setisClicked] = useState(false);

    const buttonClick = () => {
        setisClicked(true);
    }

    return !isClicked ? <HomePage cb={buttonClick}/> : <GetSchemea/>
    
}

export default App;
