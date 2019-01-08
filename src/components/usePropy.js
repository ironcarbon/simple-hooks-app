import { useState, useEffect } from 'react';
import axios from 'axios';

const usePropy = (propy) => {
    const [resources, setResources] = useState([]);
    useEffect(
        () => {
            (async (propy) => {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${propy}`)

                setResources(response.data);
            })(propy)
        }, [propy])

    return resources;
}

export default usePropy;