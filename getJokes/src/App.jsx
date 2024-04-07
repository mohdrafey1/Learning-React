import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Getjokes from './Getjokes';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Getjokes />
        </>
    );
}

export default App;
