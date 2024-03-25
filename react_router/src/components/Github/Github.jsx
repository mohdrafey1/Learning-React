import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    return (
        <>
            <p className="flex justify-center m-3">
                <b>Visitors Count</b>
            </p>
            <p align="center">
                <img
                    align="center"
                    src="https://profile-counter.glitch.me/{mohdrafey1}/count.svg"
                />
            </p>
            <br />
            <p align="center">
                <img
                    width="48%"
                    src="https://github-readme-stats.vercel.app/api?username=mohdrafey1&show_icons=true&theme=tokyonight"
                />
                <img
                    width="48%"
                    src="https://github-readme-streak-stats.herokuapp.com/?user=mohdrafey1&theme=tokyonight"
                />
            </p>
        </>
    );
}

export default Github;
