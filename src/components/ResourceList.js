import React, { useState, useEffect } from 'react';
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

const ResourceList = ({ propy }) => {

    const resources = usePropy(propy);

    return (
        <div>{resources.map(record => (
            <li key={record.id}>{record.title}</li>
        ))}</div>
    )

}
export default ResourceList;