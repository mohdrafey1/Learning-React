import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    let [counter, setCounter] = useState(0);

    // let counter = 0;

    const addValue = () => {
        if (counter < 20) {
            setCounter(counter + 1);
        }
        if (counter === 20) {
            setCounter('max limit reached');
        }
        if (counter === 'max limit reached') {
            counter = 0;
        }
    };

    const removeValue = () => {
        if (counter === 'max limit reached') {
            counter = 20;
        }
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };

    return (
        <>
            <h1>Hello</h1>
            <h2>Counter Value: {counter}</h2>
            <button onClick={addValue}>Add value</button>
            <br /> <br />
            <button onClick={removeValue}>remove value</button>
        </>
    );
}

export default App;
