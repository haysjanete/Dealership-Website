import React from "react";

class VehicleModelList extends React.Component {
    state = {
        models: [],
    };

    componentDidMount = async () => {
        const modelUrl = 'http://localhost:8100/api/models/';
        const response = await fetch(modelUrl);

        if (response.ok) {
            const data = await response.json();
            this.setState({models: data.models});
        }
    };

    render = () => {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.models.map(model => {
                        return (
                            <tr key={model.id}>
                                <td>{model.name}</td>
                                <td>{model.manufacturer.name}</td>
                                <td><img src={model.picture_url} className='img-thumbnail' width="200px" height="200px" /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        )
    };
}

export default VehicleModelList;
