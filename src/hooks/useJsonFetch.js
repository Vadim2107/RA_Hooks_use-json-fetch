import {useState, useEffect} from 'react';

export default function useJsonFetch (url, opts) {
    const [data, setData] = useState(opts);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
            setLoading(true);
            try {
                fetch(url)
                .then(response => response.json())
                    .then(result => setData(result))
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }

    }, [])

    return [{data, loading, error}]
}
