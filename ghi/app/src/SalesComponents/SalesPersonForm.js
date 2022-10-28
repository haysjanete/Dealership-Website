import React from 'react';

class NewSalesPersonForm extends React.Component {
    state = {
        name: ' ',
        employee_number: ' ',
        picture_url: ' ',

    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...this.state};

        const customerUrl = 'http://localhost:8090/api/sales/sales-person/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            header: {
                'Content-Type' : 'application/json'
            },
        };
        const CustomerResponse = await fetch(customerUrl, fetchConfig);
            if (CustomerResponse.ok) {
                this.setState({
                    name: ' ',
                    employee_number: ' ',
                });
            }
    }

    handleNameChange = (event)  => {
        const value = event.target.value;
        this.setState({name: value})
    }

    handleEmployeeNumberChange = (event) => {
        const value = event.target.value;
        this.setState({employee_number: value})
    }

    handlePictureChange = (event) => {
        const value = event.target.value;
        this.setState({location: value})
    }

    render () {
        return(
            <>
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new sales person</h1>
                <form onSubmit={this.handleSubmit} id="create-customer-form">
                    <div className="form-floating mb-3">
                        <input onChange={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" value={this.state.name} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleEmployeeNumberChange} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control" value={this.state.employee_number} />
                            <label htmlFor="employee_number">Employee Number</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Upload Employee Picture</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
            </div>
            </>
                );
        }   
}

export default NewSalesPersonForm