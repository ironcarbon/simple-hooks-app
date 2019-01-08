import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ResourceList = () => {
    const [resources, setResources] = useState([]);


    //state = { propy: [] };

    const fetchResource = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.propy}`)

        this.setState({ resources: response.data })

    }


    // async componentDidUpdate(prevProps) {
    //     if (prevProps.propy !== this.props.propy) {
    //         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.propy}`)
    //         this.setState({ propy: response.data })
    //     }
    // }


    return <div>{resources.length}</div>;

}
export default ResourceList;