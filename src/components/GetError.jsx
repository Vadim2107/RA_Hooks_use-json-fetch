import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch";

export default function GetError () {
    const [{data, loading, error}] = useJsonFetch('http://localhost:7070/error', []);

    return (
        <div className='get-error'>
            {loading && <div>Loading...</div>}
            {error && <div>Error ({error})</div>}
            <div>{data.status}</div>
        </div>
    )
}
