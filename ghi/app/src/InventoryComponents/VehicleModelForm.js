import React from 'react';

class VehicleModelForm extends React.Component {
    state = {
        name: '',
        picture_url: '',
        manufacturer_id: '',
        manufacturers: [],
    };

    componentDidMount = async () => {
        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
        const response = await fetch(manufacturerUrl);
        if (response.ok) {
            const data = await response.json();
            this.setState({ manufacturers: data.manufacturers });
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...this.state};
        delete data.manufacturers

        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok) {
            const cleared = {
                name: '',
                picture_url: '',
                manufacturer_id: '',
            };
            this.setState(cleared);
        };
    };

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    };

    render = () => {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a vehicle model</h1>
                <form onSubmit={this.handleSubmit} id="create-manufacturer-form">
                    <div className="form-floating mb-3">
                        <input value={this.state.name} onChange={this.handleChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={this.state.picture_url} onChange={this.handleChange} placeholder="Picture URL" required type="text" name="picture_url" id="picture_url" className="form-control" />
                        <label htmlFor="picture_url">Picture URL</label>
                    </div>
                    <div className="mb-3">
                        <select onChange={this.handleChange} required name="manufacturer_id" id="manufacturer_id" className="form-select">
                        <option value="">Choose a manufacturer</option>
                        {this.state.manufacturers.map(manufacturer => {
                            return (
                                <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                            )
                        })}
                        </select>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
    };
};

export default VehicleModelForm;
