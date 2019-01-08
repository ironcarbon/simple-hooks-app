import React from 'react';
import usePropy from './usePropy';

const ResourceList = ({ propy }) => {

    const resources = usePropy(propy);

    return (
        <div>{resources.map(record => (
            <li key={record.id}>{record.title}</li>
        ))}</div>
    )

}
export default ResourceList;