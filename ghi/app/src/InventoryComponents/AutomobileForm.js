import React from 'react';

class AutomobileForm extends React.Component {
    state= {
        models: [],
        year: ' ',
        color: ' ',
        vin: ' ',
    };

    handleModelChange=(event) => {
        const value = event.target.value;
        this.setState({model_id: value})
    }

    handleYearChange = (event) => {
        const value = event.target.value;
        this.setState({year: value})
    }

    handleColorChange = (event) => {
        const value = event.target.value;
        this.setState({color: value})
    }

    handleVinChange = (event) => {
        const value = event.target.value;
        this.setState({vin: value})
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        const data = {...this.state};
        delete data.models

        const automobileUrl = `http://localhost:8100/api/automobiles/`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(automobileUrl, fetchConfig);

        if (response.ok) {
            const automobileUrl= await response.json();

            const cleared = {
                models: [ ],
                year: ' ',
                color: ' ',
                vin: ' ',
            };
        this.setState(cleared);
        }
    }

    componentDidMount = async () => {
        const url = 'http://localhost:8100/api/models/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({models: data.models});
        }
    }

    render = () => {
        return(
            <>
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new</h1>
                    <form onSubmit={this.handleSubmit} id="create-customer-form">
                        <div className="form-floating mb-3">
                            <input onChange={this.handleVinChange} placeholder="VIN" required type = "text" name="vin" className="form-control" value ={this.state.vin}/>
                            <label htmlFor="name">VIN</label>
                        </div>
                        <div>
                        <select onChange={this.handleModelChange} name="model_id" id="model_id" required value={this.state.model_id} className="form-select">
                            <option value=" ">Choose a model</option>
                            {this.state.models.map(model_id =>{
                                return(
                                    <option key={model_id.id} value={model_id.id}>
                                        {model_id.name}
                                    </option>
                                );
                            })}
                        </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleYearChange} placeholder="Year" required type="text" name="year" id="year" className="form-control" value={this.state.year} />
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleColorChange} placeholder="Color" required type="text" name="color" className="form-control" value={this.state.color} />
                            <label htmlFor="color">Color</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
            </div>
            </div>
            </div>
            </>
        )
    }
}

export default AutomobileForm;
