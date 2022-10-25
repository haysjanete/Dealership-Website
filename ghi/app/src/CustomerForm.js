import React from 'react';

class NewCustomerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ' ',
            address: ' ',
            phone_number: ' ',
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};

        const customerUrl = 'http://localhost:8090/api/customer/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json'
            },
        };
        const customerResponse = await fetch(customerUrl, fetchConfig);
            if (customerResponse.ok) {
                this.setState({
                    name: ' ',
                    address: ' ',
                    phone_number: ' ',
                });
            }
    }
    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
    }

    handleAddressChange(event) {
        const value = event.target.value;
        this.setState({address: value})
    }

    handlePhoneChange(event) {
        const value = event.target.value;
        this.setState({phone_number: value})
    }

    render () {
        return(
            <>
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new customer</h1>
                <form onSubmit={this.handleSubmit} id="create-customer-form">
                    <div className="form-floating mb-3">
                        <input onChange={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" value={this.state.name} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleAddressChange} placeholder="Address" required type="text" name="address" id="address" className="form-control" value={this.state.address} />
                        <label htmlFor="address">Address</label>
                    </div>
                    <div>
                        <input onChange={this.handlePhoneChange} placeholder="Phone Number" required type="text" name="phone_number" id="phone_number" className="form-control" value={this.state.phone_number} />
                        <label htmlFor="phone_number">Phone Number</label>
                    </div>
                    <button className= "btn btn-primary">Create</button>
                </form>
            </div>
            </div>
            </div>
            </>
                );
        }
}

export default NewCustomerForm;