import { useState } from 'react';
import './App.css';

function App() {
    const [length, setLength] = useState(8);
    const [numAllow, setNumAllow] = useState(false);
    const [char, setChar] = useState(false);
    const [password, setPassword] = useState('');

    const passGenerator = () => {};

    return (
        <>
            <h1 className="text-4xl text-center text-white">
                Password Generator
            </h1>
        </>
    );
}

export default App;
