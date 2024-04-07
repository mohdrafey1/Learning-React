import React, { useEffect } from 'react';
import { useState } from 'react';

function Handleform() {
    let [formdata, setformdata] = useState({
        username: '',
        remarks: '',
        password: '',
    });

    let handleInputChange = (event) => {
        setformdata((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let formSub = (e) => {
        console.log(formdata);
        e.preventDefault();
        setformdata({ username: '', remarks: '', password: '' });
    };

    useEffect(function print() {
        console.log('hello bhaiyay');
    }, []);

    return (
        <div>
            <h1>Add Comments</h1>
            <form onSubmit={formSub}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    name="username"
                    value={formdata.username}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <label htmlFor="remarks">Remarks</label>
                <input
                    type="textarea"
                    placeholder="add remarks"
                    id="remarks"
                    name="remarks"
                    value={formdata.remarks}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    name="password"
                    value={formdata.password}
                    onChange={handleInputChange}
                />
                <br /> <br />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Handleform;
