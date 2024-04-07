import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Getjokes() {
    let URL = 'https://official-joke-api.appspot.com/random_joke';
    let newUrl = 'https://icanhazdadjoke.com/';
    let headers = { Accept: 'application/json' };

    const [joke, setjoke] = useState({});

    let Getjoke = async () => {
        // let res = await fetch(URL);
        // let resJson = await res.json();
        // console.log(resJson);
        // setjoke({
        //     setup: resJson.setup,
        //     punchline: resJson.punchline,
        // });

        let response = await fetch(newUrl, { headers: headers });
        let jsonres = await response.json();
        setjoke({
            joke: jsonres.joke,
        });
    };

    useEffect(() => {
        async function firstJoke() {
            // let res = await fetch(URL);
            // let resJson = await res.json();
            // setjoke({
            //     setup: resJson.setup,
            //     punchline: resJson.punchline,
            // });
            let response = await fetch(newUrl, { headers: headers });
            let jsonres = await response.json();
            setjoke({
                joke: jsonres.joke,
            });
        }
        firstJoke();
    }, []);

    return (
        <div>
            <h1>Jokes</h1>
            <h3>{joke.joke}</h3>
            {/* <h3>{joke.punchline}</h3>*/}
            <button onClick={Getjoke}>Get New Joke</button>
        </div>
    );
}

export default Getjokes;
