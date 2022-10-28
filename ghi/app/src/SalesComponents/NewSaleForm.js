import React from 'react';

class NewSaleForm extends React.Component {
    state={
        automobiles: [],
        sales_persons: [],
        customers: [],
        automobile: ' ',
        sales_person: ' ',
        customer: ' ',
        price: ' ',
    };

    componentDidMount = async () => {
        const automobileUrl = 'http://localhost:8100/api/automobiles/';
        const employeeUrl = 'http://localhost:8090/api/sales/sales-person/';
        const customerUrl = 'http://localhost:8090/api/customer/';
        const automobileResponse = await fetch(automobileUrl);
        const employeeResponse = await fetch(employeeUrl);
        const customerResponse = await fetch(customerUrl);

    if (automobileResponse.ok && employeeResponse.ok && customerResponse.ok) {
        const automobileData = await automobileResponse.json();
        const employeeData = await employeeResponse.json();
        const customerData = await customerResponse.json();
        this.setState({
            automobiles: automobileData.autos.filter(auto => auto.sold === false), 
            sales_persons: employeeData.sales_person, 
            customers: customerData.customer
        });
    };
}


    handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...this.state};
        delete data.automobiles;
        delete data.customers;
        delete data.sales_persons;
        

        const saleUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json'
            },
        };

        const automobilesUrl = `http://localhost:8100/api/automobiles/${data.automobile}/`;
        const automobilesfetchConfig = {
            method: 'put',
            body: JSON.stringify({sold: true}),
            headers: {
                'Content-Type': 'application/json'
            },
        }
//  if sold = true update selection to none
        // const automobilesResponse = await fetch(automobilesUrl, automobilesfetchConfig);


        const saleResponse = await fetch(saleUrl, fetchConfig);
            if(saleResponse.ok) {
                this.setState({
                    price: ' ',
                    automobile: data.automobile.vin,
                    sales_person: data.sales_person,
                    customer: data.customer

                });
            }
            // return window.location.reload();
    }
    
    handleAutomobileChange = (event) => {
        const value = event.target.value;
        this.setState({automobile: value})
    }

    handleEmployeeNumberChange = (event) => {
        const value = event.target.value;
        this.setState({sales_person: value})
    }

    handleCustomerChange = (event) => {
        const value = event.target.value;
        this.setState({customer: value})
    }

    handlePriceChange = (event) => {
        const value = event.target.value;
        this.setState({price: value})
    }

    render = () => {
        console.log(this.state)
        return(
            <>
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a New Sale</h1>
                    <form onSubmit={this.handleSubmit} id="create-sale-form">
                    <div className="mb-3">
                        <select onChange={this.handleAutomobileChange} required name = "automobile" id="automobile" className="form-select" value={this.state.automobile}>
                        <option value="">Choose an Automobile</option>
                        {this.state.automobiles.map(automobile => {
                            return(
                                <option key={automobile.vin} value={automobile.vin}>
                                    {automobile.vin}
                                </option>
                            );
                        })}
                        </select>
                    </div>
                    <div className="mb-3">
                        <select onChange={this.handleEmployeeNumberChange} required name="sales_person" id="sales_person" className="form-select" value={this.state.sales_person}>
                        <option value=" ">Choose a Sales Person</option>
                        {this.state.sales_persons.map(sales_person => {
                            return(
                                <option key={sales_person.id} value={sales_person.id}>
                                    {sales_person.name}
                                </option>
                            );
                        })}
                        </select>
                    </div>
                    <div className="mb-3">
                        <select onChange={this.handleCustomerChange} required name="customer" id="customer" className="form-select" value={this.state.customer}>
                        <option value=" ">Choose a Customer</option>
                        {this.state.customers.map(customer => {
                            return(
                                <option key={customer.id} value={customer.id}>
                                    {customer.name}
                                </option>
                            )
                        })}
                        </select>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handlePriceChange} placeholder="Price" required type="text" name="price" id="price" className="form-control" value={this.state.price} />
                        <label htmlFor="price">Price</label>
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

export default NewSaleForm;