import { useState } from 'react';
import './App.css';
import Card from './components/Cards';

function App() {
    const [count, setCount] = useState(0);
    const myObj = {
        name: 'rafey',
        age: 23,
    };
    return (
        <>
            <h1 className="bg-green-400 text-black mb-4">Hii sir</h1>
            <Card username="chai" myobj={myObj} />
            <Card username="Rafey" />
        </>
    );
}

export default App;
