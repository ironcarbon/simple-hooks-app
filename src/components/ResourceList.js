import React from 'react';
import axios from 'axios';


class ResourceList extends React.Component {

    state = { propy: [] };

    async componentDidMount() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.propy}`)

        this.setState({ propy: response.data })
    }


    render() {
        return <div>{this.state.propy.length}</div>;
    }
}

export default ResourceList;