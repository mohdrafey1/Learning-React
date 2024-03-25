import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { userid } = useParams();
    return (
        <div className="flex justify-center">
            <div className="bg-gray-600 text-white text-3xl m-4 p-4 w-3/4 text-center">
                User: {userid}
            </div>
        </div>
    );
}

export default User;
