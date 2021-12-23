import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch";

export default function GetData () {
    const [{data, loading, error}] = useJsonFetch('http://localhost:7070/data', []);

    return (
        <div className='get-data'>
            {loading && <div>Loading...</div>}
            <div>{data.status}</div>
        </div>
    )
}
